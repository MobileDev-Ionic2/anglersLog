import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

 

  public coolFeatures:boolean;

  coolFeaturesChanged()
  {
    console.log("changed col features toggle: "+this.coolFeatures);
    
    if (this.coolFeatures == false)
    {
      this.showDialog();
    }
  }

  showDialog()
  {
    let alert = this.alertCtrl.create({
    title: 'Disable Cool Features?',
    message: 'Do you really want to disable the cool features',
    buttons: [
      {
        text: 'No',
        role: 'no',
        handler: () => {
          console.log('No clicked');
          this.coolFeatures = true;
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Yes clicked');
        }
      }
    ]
    });
    alert.present();
  }
}