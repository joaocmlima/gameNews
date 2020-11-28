import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalUser:string;
  public globalUserLogged:boolean;

  constructor(
    public alertController:AlertController,
    public router:Router
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuário não logado!',
      message: 'Usuário precisa estar logado para acessar esta página.',
      buttons: [{text:'OK',handler: ()=>{this.router.navigate(['login']);}}]
    });

    await alert.present();
  }
}
