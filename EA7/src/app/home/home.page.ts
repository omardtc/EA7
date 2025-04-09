import { Component } from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  

  takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    console.log(image.dataUrl);
};

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
    console.log(info);
  };

  logBatteryInfo = async () => {
    const batteryInfo = await Device.getBatteryInfo();
    console.log(batteryInfo);
  };

  logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
  
    console.log('Network status:', status);
  };

  logCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  checkPermissions = async () => {
    const permission = await Geolocation.requestPermissions();
    console.log('Geolocation permission:', permission);
  };
  
  
}
