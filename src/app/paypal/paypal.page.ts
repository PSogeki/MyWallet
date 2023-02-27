import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {
  money: any;
  
  constructor(private home: HomePage) { }

  ngOnInit() {
    this.money = this.home.paypal;
  }
}
