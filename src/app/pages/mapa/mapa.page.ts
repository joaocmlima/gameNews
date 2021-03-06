import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
import {Map,tileLayer,marker} from 'leaflet';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  providers: [Geolocation]
})
export class MapaPage implements OnInit {

  map:Map;
  newMarker:any;
  address:string[];

  constructor(
    private geolocation: Geolocation,
    private loadingController: LoadingController,
    public global:GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    if(this.global.globalUserLogged){
      this.efeitoLoading();
      this.loadMap();
    }
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        console.log(resp.coords.latitude+" & "+resp.coords.longitude);
        this.map = new Map("mapId").setView([resp.coords.latitude,resp.coords.longitude], 17);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { 
          attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'
      }).addTo(this.map); // This line is added to add the Tile Layer to our map
      const newMarker = marker([resp.coords.latitude,resp.coords.longitude]).addTo(this.map);//This like make a marker on the location
      newMarker.bindPopup("Sua localização").openPopup();
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude+" & "+resp.coords.longitude);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  async efeitoLoading(){
    const loading = await this.loadingController.create({
      message: 'Carregando mapa...', 
      duration: 4000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  ionViewWillEnter(){
    if(!this.global.globalUserLogged){
      this.global.presentAlert();
    }
  }
}
