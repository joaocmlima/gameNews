import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController,
    public navController: NavController
  ) { }

  ngOnInit() {
  }

  logaUser(){
    this.autenticacaoService.loginNoFirebase(this.email, this.senha).then(
      (res)=>{
        this.router.navigate(['home/'+this.email]);
      }
    ).catch(
      (error)=>{
        this.mensagem = "Email ou Senha incorretos";
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

}
