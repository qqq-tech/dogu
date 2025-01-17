import { closeWebSocketWithTruncateReason, FilledPrintable, PrefixLogger, Printable, stringify } from '@dogu-tech/common';
import { DeviceClientOptions, DeviceServerResponseDto, DeviceService, DeviceWebSocket, DeviceWebSocketListener } from '@dogu-tech/device-client-common';
import { Headers, HeaderValue, HttpRequest, HttpResponse, WebSocketConnection } from '@dogu-tech/types';
import axios from 'axios';
import { WebSocket } from 'ws';

export class NodeDeviceWebSocket implements DeviceWebSocket {
  private readonly logger: FilledPrintable;

  constructor(private readonly webSocket: WebSocket, printable: Printable) {
    this.logger = new PrefixLogger(printable, '[NodeDeviceWebSocket]');
  }

  send(message: string | Uint8Array): void {
    this.webSocket.send(message, (error) => {
      if (error) {
        this.logger.error(`send error`, { message, error: stringify(error) });
      } else {
        this.logger.verbose(`send success`, { message });
      }
    });
  }

  close(code?: number | undefined, reason?: string | undefined): void {
    closeWebSocketWithTruncateReason(this.webSocket, code, reason);
    this.logger.verbose(`close`, { code, reason });
  }
}

export class NodeDeviceService implements DeviceService {
  async httpRequest(request: HttpRequest, options: Required<DeviceClientOptions>): Promise<HttpResponse> {
    const { port, timeout, printable } = options;
    const logger = new PrefixLogger(printable, '[NodeDeviceService.httpRequest]');
    const { method, path, query } = request;
    const headersParsed = Object.fromEntries(request.headers?.values.map((value) => [value.key, value.value]) || []);
    let bodyParsed: any | undefined = undefined;
    if (!request.body) {
      bodyParsed = undefined;
    } else {
      const { value } = request.body;
      if (!value) {
        bodyParsed = undefined;
      } else {
        const { $case } = value;
        let stringValueParsed = '';
        if ($case === 'bytesValue') {
          const { bytesValue } = value;
          stringValueParsed = bytesValue.toString();
        } else if ($case === 'stringValue') {
          const { stringValue } = value;
          stringValueParsed = stringValue;
        } else {
          throw new Error(`Unexpected body value: ${stringify(value)}`);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        bodyParsed = JSON.parse(stringValueParsed);
      }
    }
    const url = `http://127.0.0.1:${port}${path}`;
    const headers = headersParsed;
    const params = query;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = bodyParsed;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logger.verbose(`httpRequest`, { method, url, headers, params, data, timeout });
    const response = await axios.request<DeviceServerResponseDto>({
      method,
      url,
      headers,
      params,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
      timeout,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const headerValues: HeaderValue[] = [];
    Object.entries(response.headers).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((value) => {
          headerValues.push({ key, value: String(value) });
        });
      } else {
        headerValues.push({ key, value: String(value) });
      }
    });
    const responseHeadersParsed: Headers = {
      values: headerValues,
    };
    const returningResponse: HttpResponse = {
      statusCode: response.status,
      headers: responseHeadersParsed,
      body: {
        value: {
          $case: 'stringValue',
          stringValue: JSON.stringify(response.data),
        },
      },
      request,
    };
    logger.verbose(`httpRequest response`, { returningResponse });
    return returningResponse;
  }

  connectWebSocket(connection: WebSocketConnection, options: Required<DeviceClientOptions>, listener?: DeviceWebSocketListener): DeviceWebSocket {
    const { port, printable } = options;
    const logger = new PrefixLogger(printable, '[NodeDeviceService.connectWebSocket]');
    const { path } = connection;
    const url = `ws://127.0.0.1:${port}${path}`;
    const webSocket = new WebSocket(url);
    webSocket.on('open', () => {
      logger.verbose('open', { url });
      listener?.onOpen?.({});
    });
    webSocket.on('error', (error) => {
      logger.verbose('error', { url, error: stringify(error) });
      listener?.onError?.({});
    });
    webSocket.on('close', (code, reason) => {
      const reasonString = reason.toString();
      logger.verbose('close', { url, code, reason: reasonString });
      listener?.onClose?.({ code, reason: reasonString });
    });
    webSocket.on('message', (data, isBinary) => {
      logger.verbose('message', { url, data: isBinary ? data : data.toString(), isBinary });
      if (isBinary) {
        let dataParsed: Uint8Array | null = null;
        if (data instanceof Buffer) {
          dataParsed = new Uint8Array(data);
        } else if (data instanceof ArrayBuffer) {
          dataParsed = new Uint8Array(data);
        } else {
          throw new Error(`Unexpected data type: ${stringify(data)}`);
        }
        listener?.onMessage?.({
          value: { $case: 'bytesValue', bytesValue: dataParsed },
        });
      } else {
        listener?.onMessage?.({
          value: { $case: 'stringValue', stringValue: data.toString() },
        });
      }
    });
    return new NodeDeviceWebSocket(webSocket, printable);
  }
}
