import { GetDeviceRotationFunc, GetDeviceScreenSizeFunc, GetInspectingAreaFunc, GetNodeBoundFunc, InspectorModule } from '.';
import { AppiumRotation, DeviceRotationDirection } from '../../workers/native-ui-tree';

class AndroidInspectorModule extends InspectorModule {
  public getNodeBound: GetNodeBoundFunc = (node) => {
    const { bounds } = node.attributes;

    if (bounds) {
      return {
        x: bounds.start[0],
        y: bounds.start[1],
        width: bounds.end[0] - bounds.start[0],
        height: bounds.end[1] - bounds.start[1],
      };
    }

    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  };

  public getInspectingArea: GetInspectingAreaFunc = () => {
    const android = this.contextAndNode.android;
    console.log(android);

    if (!android) {
      return {
        x: 0,
        y: 0,
        ...this.contextAndNode.screenSize,
      };
    }

    const rotation = this.getDeviceRotation();
    const screenSize = this.getDeviceScreenSize();

    const isStatusBarVisible = android.statusBar.visible;
    const isNavigationBarVisible = android.navigationBar.visible;

    console.log(rotation);

    switch (rotation) {
      case DeviceRotationDirection.TOP_DOWN:
        if (isStatusBarVisible) {
          return {
            x: android.statusBar.x,
            y: android.statusBar.height,
            width: this.contextAndNode.node.attributes.width || screenSize.width,
            height:
              this.contextAndNode.node.attributes.height ||
              (isNavigationBarVisible ? screenSize.height - android.statusBar.height - android.navigationBar.height : screenSize.height - android.statusBar.height),
          };
        } else {
          return {
            x: 0,
            y: 0,
            width: this.contextAndNode.node.attributes.width || screenSize.width,
            height: this.contextAndNode.node.attributes.height || screenSize.height,
          };
        }
      case DeviceRotationDirection.LEFT:
        console.log(this.contextAndNode.screenSize);
        if (isStatusBarVisible) {
          return {
            x: 0,
            y: isStatusBarVisible ? android.statusBar.height : 0,
            width: isNavigationBarVisible ? screenSize.width - android.navigationBar.width : screenSize.width,
            height: this.contextAndNode.node.attributes.height ? this.contextAndNode.node.attributes.height - android.statusBar.height : screenSize.height,
          };
        } else {
          return {
            x: 0,
            y: isStatusBarVisible ? android.statusBar.height : 0,
            width: isNavigationBarVisible ? screenSize.width - android.navigationBar.width : screenSize.width,
            height: this.contextAndNode.node.attributes.height || screenSize.height,
          };
        }
      case DeviceRotationDirection.RIGHT:
        if (isStatusBarVisible) {
          return {
            x: isNavigationBarVisible ? android.navigationBar.width : 0,
            y: isStatusBarVisible ? android.statusBar.height : 0,
            width: isNavigationBarVisible ? screenSize.width - android.navigationBar.width : screenSize.width,
            height: this.contextAndNode.node.attributes.height ? this.contextAndNode.node.attributes.height - android.statusBar.height : screenSize.height,
          };
        }
        return {
          x: isNavigationBarVisible ? android.navigationBar.width : 0,
          y: isStatusBarVisible ? android.statusBar.height : 0,
          width: this.contextAndNode.node.attributes.height || screenSize.height,
          height: this.contextAndNode.node.attributes.width || screenSize.width,
        };
      case DeviceRotationDirection.UPSIDE_DOWN:
        if (isStatusBarVisible) {
          return {
            x: 0,
            y: android.statusBar.height,
            width: this.contextAndNode.node.attributes.width || screenSize.width,
            height:
              this.contextAndNode.node.attributes.height ||
              (isNavigationBarVisible ? screenSize.height - android.statusBar.height - android.navigationBar.height : screenSize.height - android.statusBar.height),
          };
        }
        return {
          x: 0,
          y: 0,
          width: this.contextAndNode.node.attributes.width || screenSize.width,
          height: this.contextAndNode.node.attributes.height || screenSize.height,
        };
      default:
        return {
          x: 0,
          y: 0,
          width: this.contextAndNode.node.attributes.width || screenSize.width,
          height: this.contextAndNode.node.attributes.height || screenSize.height,
        };
    }
  };

  public getDeviceRotation: GetDeviceRotationFunc = () => {
    const { rotation } = this.contextAndNode.node.attributes;

    switch (rotation) {
      case AppiumRotation.PORTRAIT:
        return DeviceRotationDirection.TOP_DOWN;
      case AppiumRotation.LANDSCAPE_LEFT:
        return DeviceRotationDirection.LEFT;
      case AppiumRotation.LANDSCAPE_RIGHT:
        return DeviceRotationDirection.RIGHT;
      case AppiumRotation.PORTRAIT_UPSIDE_DOWN:
        return DeviceRotationDirection.UPSIDE_DOWN;
      default:
        return DeviceRotationDirection.TOP_DOWN;
    }
  };

  public getDeviceScreenSize: GetDeviceScreenSizeFunc = () => {
    const rotation = this.getDeviceRotation();

    switch (rotation) {
      case DeviceRotationDirection.TOP_DOWN:
      case DeviceRotationDirection.UPSIDE_DOWN:
        return this.contextAndNode.screenSize;
      case DeviceRotationDirection.LEFT:
      case DeviceRotationDirection.RIGHT:
        return {
          width: this.contextAndNode.screenSize.height,
          height: this.contextAndNode.screenSize.width,
        };
      default:
        return this.contextAndNode.screenSize;
    }
  };
}

export default AndroidInspectorModule;