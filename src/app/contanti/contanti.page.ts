import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-contanti',
  templateUrl: './contanti.page.html',
  styleUrls: ['./contanti.page.scss'],
})
export class ContantiPage implements OnInit {
  money: any;
  
  constructor(private home: HomePage) { }

  ngOnInit() {
    this.money = this.home.contanti;
  }
}
