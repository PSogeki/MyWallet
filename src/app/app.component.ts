import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonModal) modal!: IonModal;

  mov!: FormGroup;

  constructor() {}

  cancel() {
    this.modal.dismiss();
  }

  nuovoMovimento() {}
}
