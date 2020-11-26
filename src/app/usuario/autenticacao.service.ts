import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  loginNoFirebase(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email,password);
  }

  insertNoFirebase(email, password){
    return this.ngFireAuth.createUserWithEmailAndPassword(email,password);
  }

  getUserLogged(){
    return this.ngFireAuth.currentUser;
  }
}
