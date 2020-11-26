import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.page.html',
  styleUrls: ['./insert-user.page.scss'],
})
export class InsertUserPage implements OnInit {

  public email:string = "";
  public senha:string = "";
  public mensagem:string = "";

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  insertUser(){
    this.autenticacaoService.insertNoFirebase(this.email, this.senha).then(
      (res)=>{
        this.router.navigate(['home/'+this.email]);
      }
    ).catch(
      (error)=>{
        this.mensagem = "Erro ao cadastrar usuário";
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
