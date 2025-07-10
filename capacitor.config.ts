import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'com.posystem.app',
  appName: 'POS System',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    BarcodeScanner: {
      showFlipCameraButton: true,
      showTorchButton: true,
      android: {
        shouldUseLocationPermission: false,
      },
    },
  },
};

export default config;