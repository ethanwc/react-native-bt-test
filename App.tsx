import React from 'react';
import {View, Text, NativeModules, NativeEventEmitter} from 'react-native';

import BleManager from 'react-native-ble-manager';

import App2 from './example/App';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const App = () => {
  // BleManager.start({showAlert: false}).then(() => {
  //   // Success code
  //   console.log('Module initialized');
  // });

  // BleManager.scan([], 10, true).then(() => {
  //   // Success code
  //   console.log('Scan started');
  // });

  // bleManagerEmitter.addListener('BleManagerStopScan', () => {
  //   console.log('Scan stopped');

  //   // Scanning is stopped
  //   BleManager.getDiscoveredPeripherals().then((peripheralsArray) => {
  //     // Success code
  //     console.log('Discovered peripherals: ' + peripheralsArray.length);
  //   });
  // });

  // BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
  //   // Success code
  //   console.log('Connected peripherals: ' + peripheralsArray.length);
  // });

  return <App2 />;
};

export default App;
