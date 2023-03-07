import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  @ViewChild(IonModal) modal!: IonModal;

  credentials: FormGroup;

  constructor(private fb: FormBuilder) {
    this.credentials = this.fb.group({
			data: ['', [Validators.required]],
			tipo: ['', [Validators.required]],
      casuale: ['', [Validators.required]],
		});
  }

  ngOnInit() {
    this.credentials = this.fb.group({
			data: ['', [Validators.required]],
			tipo: ['', [Validators.required]],
      casuale: ['', [Validators.required]],
		});
  }

  cancel() {
    this.modal.dismiss();
  }

  movimento(){
    //invia credential al service per la creazione del nuovo movimento
    this.modal.dismiss();
  }
}