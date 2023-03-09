import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SummaryFareType } from 'src/app/interface/interface';

@Component({
  selector: 'app-personal-vehicle',
  templateUrl: './personal-vehicle.component.html',
  styleUrls: ['./personal-vehicle.component.css'],
})
export class PersonalVehicleComponent implements OnInit {
  nameOfWorks!: string[];
  expresswayCondition: string = 'ไม่มีค่าผ่านทางพิเศษ';

  summaryFare: SummaryFareType | null = null;

  @Input() personalForm: FormGroup | any = {};

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.nameOfWorks = ['บางระจันทร์', 'ขุนพันธ์'];
  }

  get getPersonalForm() {
    return this.personalForm.controls;
  }

  setNameOfWorkChosen(work: any) {
    console.log('work: ', work.value, 'validate: ', work.validate);
    this.personalForm.get('workName')?.setValue(work.value);

    console.log(this.personalForm.value);
    // this.getPersonalForm['workName'].value
  }

  public onRadioChange(expresswayType: any) {
    this.expresswayCondition = expresswayType.target.value;
    this.personalForm
      .get('expresswayOptions')
      ?.setValue(expresswayType.target.value);
  }

  onSelectFile(event: any): void {
    console.log(event);

    this.personalForm.get('evidenceExpresswayFile')?.setValue(event);
    console.log(this.personalForm.value);
  }

  convertToInt(number: string) {
    return parseInt(number);
  }

  calculateSummary() {
    let summary = 0;
    if (this.getPersonalForm['km'].value) {
      if (this.getPersonalForm['expresswayFare'].value) {
        summary =
          this.getPersonalForm['km'].value * 5 +
          this.convertToInt(this.getPersonalForm['expresswayFare'].value);
      } else {
        summary = this.getPersonalForm['km'].value * 5;
      }
    }

    return summary;
  }
}
