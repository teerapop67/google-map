import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-fare-rate',
  templateUrl: './edit-fare-rate.component.html',
  styleUrls: ['./edit-fare-rate.component.css'],
})
export class EditFareRateComponent implements OnInit {
  rateFareForm = {} as FormGroup;

  isValidFormSubmitted: boolean | null = null;

  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.rateFareForm = this.formBuilder.group({
      rateControl: this.formBuilder.array([]),
    });

    this.addRate(1, 2, 50);
  }

  get rateControl() {
    return this.rateFareForm.get('rateControl') as FormArray | any;
  }

  addRate(km: number | null, to: number | null, rate: number | null) {
    const rateForm = this.formBuilder.group({
      KM: [km, [Validators.required, Validators.min(1)]],
      TO: [to, [Validators.required, Validators.min(1)]],
      RATE: [rate, [Validators.required, Validators.min(1)]],
    });

    this.rateControl.push(rateForm);
  }

  removeRate(rateControlIndex: number) {
    this.rateControl.removeAt(rateControlIndex);
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;

    if (this.rateFareForm.invalid) {
      return;
    }

    this.isValidFormSubmitted = true;

    let rateFormSubmit = this.rateFareForm.value;

    this.router.navigateByUrl('/reimbursement');
  }
}
