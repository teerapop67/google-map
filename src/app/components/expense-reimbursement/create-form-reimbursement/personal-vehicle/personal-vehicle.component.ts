import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { personalForm } from 'src/app/core/forms/personal-form';

@Component({
  selector: 'app-personal-vehicle',
  templateUrl: './personal-vehicle.component.html',
  styleUrls: ['./personal-vehicle.component.css'],
})
export class PersonalVehicleComponent implements OnInit {
  nameOfWorks!: string[];

  @Input() personalForm: FormGroup | any = {};

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.nameOfWorks = ['บางระจันทร์', 'ขุนพันธ์'];
  }

  get getPersonalForm() {
    return this.personalForm.controls;
  }

  getNameOfWorkChosen(work: any) {
    console.log('work: ', work.value, 'validate: ', work.validate);
    this.personalForm.get('workName')?.setValue(work.value);

    console.log(this.personalForm.value);
    // this.getPersonalForm['workName'].value
  }
}
