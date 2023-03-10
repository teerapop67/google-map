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
      for (let i = 0; i < this.getPersonalForm['km'].value.length; i++) {
        console.log('km', i);
      }
      summary += this.getPersonalForm['km'].value * 5;
    }
    if (this.getPersonalForm['expresswayFare'].value) {
      summary += this.convertToInt(
        this.getPersonalForm['expresswayFare'].value
      );
    }

    return summary;
  }
}
