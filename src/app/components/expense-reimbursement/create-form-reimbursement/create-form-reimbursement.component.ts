import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import {
  mainForm,
  personalForm,
  publicTransportForm,
} from 'src/app/core/forms/reimbursement-form';

@Component({
  selector: 'app-create-form-reimbursement',
  templateUrl: './create-form-reimbursement.component.html',
  styleUrls: ['./create-form-reimbursement.component.css'],
})
export class CreateFormReimbursementComponent implements OnInit {
  typeOfTravels!: string[];
  typeChosen: string | null = '';
  disabledSubmit: boolean = false;

  mainForm: FormGroup = mainForm();

  personalForm: FormGroup = personalForm();

  publicTransportForm: any = publicTransportForm();

  constructor() {}

  ngOnInit() {
    this.typeOfTravels = ['พาหนะส่วนตัว', 'ขนส่งสาธารณะ'];
  }

  get getMainForm() {
    return this.mainForm.controls;
  }

  get getPersonalForm() {
    return this.personalForm.controls;
  }

  get getPublicTransportControl() {
    return this.publicTransportForm.get('publicTransportControl') as
      | FormArray
      | any;
  }

  setTypeOfChosen(type: any) {
    this.typeChosen = type.value;
    this.mainForm.get('type')?.setValue(type.value);
  }

  onSubmitForm() {
    if (this.disabledSubmit) return;
    if (this.typeChosen === 'พาหนะส่วนตัว') {
      console.log(this.personalForm.value);
    } else {
      console.log(this.getPublicTransportControl.value);
    }
    this.disabledSubmit = true;

    // after already sent data
    setTimeout(() => {
      this.disabledSubmit = false;
    }, 2000);
  }

  isInvalidSubmitted(submitted: boolean, typeChosen: string | null) {
    if (submitted) {
      return submitted;
    } else {
      return this.conditionInvalidTypeOfChosen(typeChosen);
    }
  }

  private conditionInvalidTypeOfChosen(typeChosen: string | null) {
    if (typeChosen === 'พาหนะส่วนตัว') {
      if (this.mainForm.invalid) return this.mainForm.invalid;
      return this.onSubmitPersonalForm();
    } else {
      // ขนส่งสาธารณะ
      if (this.publicTransportForm.invalid) {
        return this.publicTransportForm.invalid;
      }
    }
    return false;
  }

  private onSubmitPersonalForm() {
    if (
      this.getPersonalForm['origin'].invalid ||
      this.getPersonalForm['destination'].invalid ||
      this.getPersonalForm['km'].invalid ||
      this.getPersonalForm['originLatLng']?.invalid ||
      this.getPersonalForm['destinationLatLng']?.invalid ||
      this.getPersonalForm['workName'].invalid
    ) {
      return true;
    }

    if (
      this.getPersonalForm['expresswayOptions'].value === 'มีค่าผ่านทางพิเศษ'
    ) {
      if (
        this.getPersonalForm['expresswayFare'].invalid ||
        this.getPersonalForm['evidenceExpresswayFile'].invalid
      )
        return true;
    }

    return false;
  }
}
