import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseReimbursementComponent } from './expense-reimbursement';
import { ExpenseReimbursementRoutingModule } from './expense-reimbursement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { EditFareRateComponent } from './edit-fare-rate/edit-fare-rate.component';
import { HistoryReimbursementComponent } from './history-reimbursement/history-reimbursement.component';
import { LayoutReimbursementComponent } from 'src/app/layouts/layout-reimbursement/layout-reimbursement.component';
import { DetailReimbursementComponent } from './detail-reimbursement/detail-reimbursement.component';

@NgModule({
  declarations: [
    ExpenseReimbursementComponent,
    GoogleMapComponent,
    EditFareRateComponent,
    HistoryReimbursementComponent,
    LayoutReimbursementComponent,
    DetailReimbursementComponent,
  ],
  imports: [
    CommonModule,
    ExpenseReimbursementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ExpenseReimbursementModule {}
