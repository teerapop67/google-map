import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormReimbursementComponent } from './create-form-reimbursement/create-form-reimbursement.component';
import { DetailReimbursementComponent } from './detail-reimbursement/detail-reimbursement.component';
import { EditFareRateComponent } from './edit-fare-rate/edit-fare-rate.component';
import { DetailsPetitionComponent } from './details-petition/details-petition.component';
import { HistoryReimbursementComponent } from './history-reimbursement/history-reimbursement.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DetailReimbursementComponent },
  { path: 'fare-rate', component: EditFareRateComponent },
  { path: 'form-reimbursement', component: CreateFormReimbursementComponent },
  { path: 'details-petition', component: DetailsPetitionComponent },
  { path: 'history-reimbursement', component: HistoryReimbursementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseReimbursementRoutingModule {}
