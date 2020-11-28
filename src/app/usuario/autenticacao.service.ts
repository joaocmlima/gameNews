import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { GlobalService } from "../global/global.service"

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    public ngFireAuth: AngularFireAuth,
    public global: GlobalService
  ) { }

  loginNoFirebase(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email,password); 
  }

  insertNoFirebase(email, password){
    return this.ngFireAuth.createUserWithEmailAndPassword(email,password);
  }
}
