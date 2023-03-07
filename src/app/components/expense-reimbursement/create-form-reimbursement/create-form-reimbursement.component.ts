import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { personalForm } from 'src/app/core/forms/personal-form';

@Component({
  selector: 'app-create-form-reimbursement',
  templateUrl: './create-form-reimbursement.component.html',
  styleUrls: ['./create-form-reimbursement.component.css'],
})
export class CreateFormReimbursementComponent implements OnInit {
  typeOfTravels!: string[];
  typeChosen: string | null = 'พาหนะส่วนตัว';
  personalForm: FormGroup = personalForm();

  constructor() {}

  ngOnInit() {
    this.typeOfTravels = ['พาหนะส่วนตัว', 'ขนส่งสาธารณะ'];
  }

  getTypeOfChosen(type: any) {
    this.typeChosen = type.value;
    console.log('asdsa', type.value);
    this.personalForm.get('type')?.setValue(type.value);
    console.log(this.personalForm.value);
  }
}
