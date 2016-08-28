import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import {Platform, ActionSheet, } from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';

import {Catch} from '../models/catch';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public alertCtrl: AlertController) {
  
  }
  
  public catch = new Catch();
  
  submitCatch()
  {
      
     let alert = this.alertCtrl.create({
      title: 'species '+this.catch.species,
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }  
  
}
