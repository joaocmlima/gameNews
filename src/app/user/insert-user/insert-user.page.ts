import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { GlobalService } from 'src/app/global/global.service';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.page.html',
  styleUrls: ['./insert-user.page.scss'],
})
export class InsertUserPage implements OnInit {

  public email:string = "";
  public senha:string = "";
  public senha2:string = "";
  public mensagem:string = "";
  public type="password";
  public colorActive="medium";

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController,
    public global:GlobalService,
    public app: AppComponent
  ) { }

  ngOnInit() {
  }

  insertUser(){
    if(this.senha==this.senha2){
      this.autenticacaoService.insertNoFirebase(this.email, this.senha).then(
        (res)=>{
          this.global.globalUserLogged = true;
          this.global.globalUser = this.email;
          this.app.setSelected();
          this.router.navigate(['home']);
        }
      ).catch(
        (error)=>{
          this.mensagem = "Erro ao cadastrar usuário\n" + error;
          this.exibeMensagem();
        }
      )
    }else{
      this.mensagem = "Senhas não coincidem!"
      this.exibeMensagem();
    }
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
