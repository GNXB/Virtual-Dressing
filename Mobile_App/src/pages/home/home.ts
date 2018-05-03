import { Component } from '@angular/core';
import { NavController, Option } from 'ionic-angular';

import {Camera, CameraOptions, DestinationType } from '@ionic-native/camera';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import{ ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public image = '';
  //private options: CameraOptions;
  //path : string;
  myphoto : any;
  constructor(public navCtrl: NavController, private camera: Camera,
    private transfer: FileTransfer,private file: File,private http: HTTP,
    private picker:ImagePicker) {
      //this.path = "assets/imgs/Very-Basic-Reload-icon.png";

  }

  getPicture(){
    const options : CameraOptions ={
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE

    }
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    },(err) => {
      //here's where error happens
    });
   
  }
  
  openGallery(){
    const options : CameraOptions ={
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    },(err) => {
      //here's where error happens
    });
  }

  cropPicture(){
    const options : CameraOptions ={
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit : true,
      targetWidth:300,
      targetHeight:300
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    },(err) => {
      //here's where error happens
    });
  }

  /*choosePicture(){
    const options : ImagePickerOptions ={
      maximumImagesCount : 1,
      outputType : 0 // 0=path , 1 base64
    }
    this.picker.getPictures(options).then(results =>{
      for(var i =0 ; i<results.length ; i++)
      {
        alert("Gallery Path : " + results[i]);
        this.path = results[i];
        
      }
    },(err) => {
      //here's where error happens
    });
  }*/

  
}
//this.HTTP.post("http://localhost:8000",this.base64Image).map((res:Response) => res.json())
//.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 



