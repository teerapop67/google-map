import { FormControl, FormGroup, Validators } from '@angular/forms';

export const personalForm = () => {
  return new FormGroup({
    type: new FormControl(),
    date: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    origin: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    destination: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    km: new FormControl(),
    originLatLng: new FormControl(),
    destinationLatLng: new FormControl(),
    expressway: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    evidence: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    workName: new FormControl(),
  });
};
