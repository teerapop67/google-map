import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    console.log('SHS: ', this.getPublicTransportControl);
  }

  get getPublicTransportControl() {
    return this.publicTransportForm.get('publicTransportControl') as
      | FormArray
      | any;
  }

  get setPublicTransportControl() {
    return this.getPublicTransportControl.controls;
  }

  addMoreTransport() {
    const transportForm = this.formBuilder.group({
      typeOfTransport: ['', [Validators.required]],
      workName: ['', [Validators.required]],
      expresswayFare: ['', [Validators.required]],
      fareTravel: ['', [Validators.required]],
      evidence: ['', [Validators.required]],
    });

    this.getPublicTransportControl.push(transportForm);
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
}
