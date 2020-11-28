import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public user:string;

  constructor(
    public activatedRoute:ActivatedRoute,
    public global:GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(!this.global.globalUserLogged){
      this.global.presentAlert();
    }
  }
}
