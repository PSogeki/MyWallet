import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.page.html',
  styleUrls: ['./poste.page.scss'],
})
export class PostePage implements OnInit {
  money: any;
  
  constructor(private home: HomePage) { }

  ngOnInit() {
    this.money = this.home.poste;
  }
}
