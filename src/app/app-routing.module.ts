import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './components/google-map/google-map.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'reimbursement' },
  {
    path: 'reimbursement',
    loadChildren: () =>
      import(
        './components/expense-reimbursement/expense-reimbursement.module'
      ).then((m) => m.ExpenseReimbursementModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
