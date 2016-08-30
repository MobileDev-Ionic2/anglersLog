import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { Storage, LocalStorage } from 'ionic-angular';
import {Catch} from '../models/catch';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navCtrl: NavController) {
    this.localStorage = new Storage(LocalStorage);
    this.catches = new Array();
    this.localStorage.getJson("catches").then(data => this.catches = data);
    
    
  }

  private localStorage:Storage;

  private catches;

  // mere om events http://ionicframework.com/docs/v2/api/components/nav/NavController/
  public ionViewDidEnter()
  {
    // update list from localstorage when tab opens
    this.localStorage.getJson("catches").then(data => this.catches = data);
  }
  
  
}
