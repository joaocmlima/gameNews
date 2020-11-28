import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { GlobalService } from 'src/app/global/global.service';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userEmail:string;
  public email:string = "";
  public senha:string = "";
  public mensagem:string = "";
  public type:string="password";
  public colorActive:string="medium";

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController,
    public navController: NavController,
    public alertController: AlertController,
    public global:GlobalService,
    public app: AppComponent
  ) { }

  ngOnInit() {
  }

  logaUser(){
    this.autenticacaoService.loginNoFirebase(this.email, this.senha).then(
      (res)=>{
        this.global.globalUserLogged = true;
        this.global.globalUser = this.email;
        this.app.setSelected();
        this.router.navigate(['home']);
      }
    ).catch(
      (error)=>{
        this.mensagem = "Email ou Senha incorretos\n" + error;
        this.exibeMensagem();
      }
    )
  }

  async exibeMensagem(){
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration:2000
    });
    toast.present();
  }

  showSenha(){
    if(this.type=="password"){
      this.colorActive = "secondary";
      this.type = "text";
    }else{
      this.colorActive = "medium";
      this.type = "password";
    }
    
  }

}
