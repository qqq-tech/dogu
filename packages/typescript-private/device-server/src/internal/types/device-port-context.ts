export type DevicePortContext = {
  freeHostPort1: number;
  freeHostPort2: number;
  freeHostPort3: number;
};

export function DefaultDevicePortContext(): DevicePortContext {
  return {
    freeHostPort1: 0,
    freeHostPort2: 0,
    freeHostPort3: 0,
  };
}
