import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import {Platform, ActionSheet, } from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';

import {Catch} from '../models/catch';

import { Storage, LocalStorage } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public alertCtrl: AlertController) {
    this.localStorage = new Storage(LocalStorage);
    
    this.currentCatch.datetime = new Date();
  }
  
  private currentCatch:Catch = new Catch();
  
  private catches:Catch[] = new Array();

  private localStorage:Storage;

  submitCatch()
  {
      
     let alert = this.alertCtrl.create({
      title: 'You Catch is saved',
      subTitle: 'You can see your catches on the \'All Catches\' tab',
      buttons: ['OK']
    });
    alert.present();

    this.catches.push(this.currentCatch);
    
    this.localStorage.setJson("catches", this.catches);
    this.localStorage.set("method", this.currentCatch.method);

    //this.currentCatch = new Catch();
  }  
  
}
