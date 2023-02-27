import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage {
  poste: any;
  buddybank: any;
  contanti: any;
  paypal: any;
  totale: any;

  constructor() {
    this.poste = 30;
    this.buddybank = 140;
    this.contanti = 200;
    this.paypal = 0;
    this.totale = this.poste + this.buddybank + this.contanti + this.paypal;
  }

}
