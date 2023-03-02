import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseReimbursementComponent } from './expense-reimbursement';
import { ExpenseReimbursementRoutingModule } from './expense-reimbursement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { EditFareRateComponent } from './edit-fare-rate/edit-fare-rate.component';

@NgModule({
  declarations: [
    ExpenseReimbursementComponent,
    GoogleMapComponent,
    EditFareRateComponent,
  ],
  imports: [
    CommonModule,
    ExpenseReimbursementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ExpenseReimbursementModule {}
