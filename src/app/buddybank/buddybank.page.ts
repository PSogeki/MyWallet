import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-buddybank',
  templateUrl: './buddybank.page.html',
  styleUrls: ['./buddybank.page.scss'],
})
export class BuddybankPage implements OnInit {
  money: any;
  
  constructor(private home: HomePage) { }

  ngOnInit() {
    this.money = this.home.buddybank;
  }

}
