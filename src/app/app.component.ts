import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public userEmail:string;
  public userLogged;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home/',
      icon: 'home',
    },
    {
      title: 'Mapa',
      url: 'mapa/',
      icon: 'map',
    },
    {
      title: 'VALORANT',
      url: 'main/VALORANT/VALORANT/',
      icon: '',
      img: 'assets/VAL-small.svg'
    },
    {
      title: 'League of Legends',
      url: 'main/LoL/League of Legends/',
      icon: '',
      img: 'assets/lol-icon.png'
    },
    {
      title: 'Dota 2',
      url: 'main/Dota 2/Dota 2/',
      icon: '',
      img: 'assets/588267.svg'
    },
    {
      title: 'Hearthstone',
      url: 'main/Hearthstone/Hearthstone/',
      icon: '',
      img: 'assets/logo_small_hs.png'
    },
    {
      title: 'CS:GO',
      url: 'main/CS:GO/Counter Strike Global Offensive/',
      icon: '',
      img: 'assets/cs-go-logo.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  kindaGetUser(){
    if (window.location.pathname.split('home/')[1] !== undefined) {
      this.userEmail = window.location.pathname.split('home/')[1];
    }
  }

  sair(){
    navigator['app'].exitApp();
  }
}
