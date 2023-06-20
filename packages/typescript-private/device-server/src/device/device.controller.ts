import { Code, Serial } from '@dogu-private/types';
import { Instance } from '@dogu-tech/common';
import { CreateLocalDeviceDetectTokenRequest, Device, DeviceConfigDto, GetAppiumChannelInfoQuery, StreamingOfferDto } from '@dogu-tech/device-client-common';
import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { LocalDeviceService } from '../local-device/local-device.service';
import { appiumChannelNotFoundError } from '../response-utils';
import { ScanService } from '../scan/scan.service';
import { deviceNotFoundError } from './device.utils';

@Controller(Device.controller)
export class DeviceController {
  constructor(private readonly scanService: ScanService, private readonly configService: ConfigService, private readonly localDeviceService: LocalDeviceService) {}

  @Get(Device.getDeviceSerials.path)
  getDeviceSerials(): Instance<typeof Device.getDeviceSerials.responseBody> {
    const serials = this.scanService.serials();
    return {
      value: {
        $case: 'data',
        data: {
          serials,
        },
      },
    };
  }

  @Get(Device.getDevicePlatformSerials.path)
  getDevicePlatformSerials(): Instance<typeof Device.getDevicePlatformSerials.responseBody> {
    const platformSerials = this.scanService.platformSerials();
    return {
      value: {
        $case: 'data',
        data: {
          platformSerials,
        },
      },
    };
  }

  @Get(Device.getDeviceSystemInfo.path)
  getDeviceSystemInfo(@Param('serial') serial: Serial): Instance<typeof Device.getDeviceSystemInfo.responseBody> {
    const device = this.scanService.findChannel(serial);
    if (device === null) {
      return deviceNotFoundError(serial);
    }
    return {
      value: {
        $case: 'data',
        data: {
          info: device.info,
        },
      },
    };
  }

  @Patch(Device.updateDeviceConfig.path)
  async updateDeviceConfig(@Param('serial') serial: Serial, @Body() deviceConfig: DeviceConfigDto): Promise<Instance<typeof Device.updateDeviceConfig.responseBody>> {
    const device = this.scanService.findChannel(serial);
    if (device === null) {
      return deviceNotFoundError(serial);
    }
    await this.configService.applyConfig(serial, deviceConfig);
    return {
      value: {
        $case: 'data',
        data: {},
      },
    };
  }

  @Post(Device.rebootDevice.path)
  async reboot(@Param('serial') serial: Serial): Promise<Instance<typeof Device.rebootDevice.responseBody>> {
    const device = this.scanService.findChannel(serial);
    if (device === null) {
      return deviceNotFoundError(serial);
    }
    await device.reboot();
    return {
      value: {
        $case: 'data',
        data: {},
      },
    };
  }

  @Post(Device.startDeviceStreaming.path)
  async startStreaming(@Param('serial') serial: Serial, @Body() offer: StreamingOfferDto): Promise<Instance<typeof Device.startDeviceStreaming.responseBody>> {
    const channel = this.scanService.findChannel(serial);
    if (channel === null) {
      return deviceNotFoundError(serial);
    }
    const peerDescription = await channel.startStreamingWebRTC(offer);
    return {
      value: {
        $case: 'data',
        data: peerDescription,
      },
    };
  }

  /**
   * @note called from console front. useDeviceInspector.ts
   */
  @Post(Device.createLocalDeviceDetectToken.path)
  createLocalDeviceDetectToken(
    @Param('serial') serial: Serial,
    @Body() body: CreateLocalDeviceDetectTokenRequest,
  ): Instance<typeof Device.createLocalDeviceDetectToken.responseBody> {
    this.localDeviceService.saveToken(body.token, body.lifeTimeSeconds);
    return {
      value: {
        $case: 'data',
        data: {},
      },
    };
  }

  @Get(Device.getLocalDeviceDetectToken.path)
  getLocalDeviceDetectToken(): Instance<typeof Device.getLocalDeviceDetectToken.responseBody> {
    return {
      value: {
        $case: 'data',
        data: {
          tokens: this.localDeviceService.getTokens(),
        },
      },
    };
  }

  @Get(Device.getAppiumChannelInfo.path)
  async getAppiumChannelInfo(@Param('serial') serial: Serial, @Query() query: GetAppiumChannelInfoQuery): Promise<Instance<typeof Device.getAppiumChannelInfo.responseBody>> {
    const channel = this.scanService.findChannel(serial);
    if (channel === null) {
      return deviceNotFoundError(serial);
    }
    const { key } = query;
    const appiumChannel = await channel.getAppiumChannel(key);
    if (appiumChannel === null) {
      return appiumChannelNotFoundError(serial, key);
    }
    try {
      const data: Instance<typeof Device.getAppiumChannelInfo.responseBodyData> = {
        info: appiumChannel.info,
      };
      return {
        value: {
          $case: 'data',
          data,
        },
      };
    } catch (error) {
      return {
        value: {
          $case: 'error',
          error: {
            code: Code.CODE_DEVICE_SERVER_APPIUM_CHANNEL_INFO_NOT_FOUND,
            message: `Appium channel get info failed for key: ${key}`,
            details: {
              serial,
              key,
            },
          },
        },
      };
    }
  }
}