import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransportType } from 'src/app/interface/interface';

@Component({
  selector: 'app-public-transport',
  templateUrl: './public-transport.component.html',
  styleUrls: ['./public-transport.component.css'],
})
export class PublicTransportComponent implements OnInit {
  @Input() publicTransportForm: FormGroup | any = {};

  publicTransports: string[] = [];
  nameOfWorks: string[] = [];

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.nameOfWorks = ['บางระจันทร์', 'ขุนพันธ์'];
    this.publicTransports = ['แท็กซี่', 'ตุ๊กๆ', 'รถเมล์', 'เรือขนส่ง'];
  }

  get getPublicTransportControl() {
    return this.publicTransportForm.get('publicTransportControl') as
      | FormArray
      | any;
  }

  get setPublicTransportControl() {
    return this.getPublicTransportControl.controls;
  }

  addMoreTransport(
    type: string,
    workName: string,
    expresswayFare: string,
    fareTravel: string,
    evidence: any
  ) {
    const transportForm = this.formBuilder.group({
      typeOfTransport: [type, [Validators.required]],
      workName: [workName, [Validators.required]],
      expresswayFare: [expresswayFare, [Validators.required]],
      fareTravel: [fareTravel, [Validators.required]],
      evidence: [evidence, [Validators.required]],
    });

    this.getPublicTransportControl.push(transportForm);
  }

  removeTransport(index: number) {
    this.getPublicTransportControl.removeAt(index);
  }

  setPublicTransportChosen(transport: any, index: number) {
    this.setPublicTransportControl[index].controls['typeOfTransport']?.setValue(
      transport.value
    );
  }

  setNameOfWorkChosen(work: any, index: number) {
    this.setPublicTransportControl[index].controls['workName']?.setValue(
      work.value
    );
    console.log('ley:', this.setPublicTransportControl[0].controls);
    console.log(this.getPublicTransportControl.value);
  }

  onSelectFile(event: any, index: number): void {
    this.setPublicTransportControl[index].controls['evidence']?.setValue(event);
    console.log('gewfew', this.getPublicTransportControl.value);
    console.log('sadasddsa', this.publicTransportForm.value);
  }

  convertToInt(number: string) {
    return parseInt(number);
  }

  calculateSummaryTravel() {
    let summary = 0;
    this.getPublicTransportControl.value.map((transport: TransportType) => {
      if (transport.expresswayFare) {
        summary += this.convertToInt(transport.expresswayFare);
      }
      if (transport.fareTravel) {
        summary += this.convertToInt(transport.fareTravel);
      }
    });

    return summary;
  }
}
