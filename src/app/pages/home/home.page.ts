import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public user:string;

  constructor(
    public activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
  }

}
