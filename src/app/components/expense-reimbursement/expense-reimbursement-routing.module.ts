import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { DetailReimbursementComponent } from './detail-reimbursement/detail-reimbursement.component';
import { EditFareRateComponent } from './edit-fare-rate/edit-fare-rate.component';
import { ExpenseReimbursementComponent } from './expense-reimbursement';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DetailReimbursementComponent },
  { path: 'g', component: GoogleMapComponent },
  { path: 'fare-rate', component: EditFareRateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseReimbursementRoutingModule {}
