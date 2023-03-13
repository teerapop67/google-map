import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export const mainForm = () => {
  return new FormGroup({
    type: new FormControl(),
    date: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
  });
};

export const personalForm = () => {
  return new FormGroup({
    origin: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    destination: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    km: new FormControl(),
    originLatLng: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    destinationLatLng: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    expresswayFare: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    evidenceExpresswayFile: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    expresswayOptions: new FormControl('ไม่มีค่าผ่านทางพิเศษ'),
    workName: new FormControl(),
  });
};

export const publicTransportForm = () => {
  return new FormGroup({
    publicTransportControl: new FormArray([
      new FormGroup({
        typeOfTransport: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'change',
        }),
        workName: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'change',
        }),
        expresswayFare: new FormControl(),
        fareTravel: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'change',
        }),
        evidence: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'change',
        }),
      }),
    ]),
  });
};
