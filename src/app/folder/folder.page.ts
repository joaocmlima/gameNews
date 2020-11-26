import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Map,tileLayer,marker} from 'leaflet';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [Geolocation]
})
export class FolderPage implements OnInit {
  public folder: string;
  map:Map;
  newMarker:any;
  address:string[];

  constructor(
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }

  ionViewDidEnter(){
    this.coordinates();
  }

  coordinates(){
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        this.map = new Map("mapId").setView([resp.coords.latitude,resp.coords.longitude], 13);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { 
          attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'
      }).addTo(this.map); // This line is added to add the Tile Layer to our map
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude+" & "+resp.coords.longitude);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  

}
