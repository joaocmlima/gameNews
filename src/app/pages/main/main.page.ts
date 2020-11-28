import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from 'src/app/global/global.service';
import { NewsapiService } from 'src/app/news/newsapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers:[NewsapiService]
})
export class MainPage implements OnInit {

  public lista_news = new Array<any>();
  public subject:string;
  public title:string;
  public page = 1;
  public maxPage:number;
  public resultsPerPage = 20;
  public user:string;

  constructor(
    public newsApi:NewsapiService, 
    private activatedRoute:ActivatedRoute, 
    public loadingController:LoadingController,
    public global: GlobalService
  ) { }

  ngOnInit() {
    this.subject = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    console.log(this.title);
  }

  efeitoRefresh(event){
    this.page = 1;  
    this.carregaPagina();

    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  carregaPagina(){
    this.newsApi.getEverythingAbout(this.subject, this.page).subscribe(
      data=>{
        const response = (data as any);
        /*this.lista_news = this.lista_news.concat(response.articles);
        this.maxPage = Math.floor(response.totalResults/this.resultsPerPage);*/
        if(this.page == 1){
          this.lista_news = response.articles;
        }else{
          this.lista_news = this.lista_news.concat(response.articles);
        }
        this.maxPage = Math.floor(response.totalResults/this.resultsPerPage);
        if(response.totalResults%this.resultsPerPage!=0){
          this.maxPage++;
        } 
        console.log(this.maxPage)
      },

      error=>{
        console.log(error);
      }
    )
  }

  ionViewDidEnter(){
    if(this.global.globalUserLogged){
      this.carregaPagina();
      this.efeitoLoading();
    }
  }

  async efeitoLoading(){
    const loading = await this.loadingController.create({
      message: 'Carregando as notícias', 
      duration: 4000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  efeitoScrollInfinito(event) {
    if(this.page==this.maxPage){
      event.target.disabled = true;
    }
    if(this.page!=this.maxPage){
      setTimeout(() => {
        this.page++;
        this.carregaPagina();
        console.log('Done');
        event.target.complete();
      }, 4000);
    }
  }

  ionViewWillEnter(){
    if(!this.global.globalUserLogged){
      this.global.presentAlert();
    }
  }

}
