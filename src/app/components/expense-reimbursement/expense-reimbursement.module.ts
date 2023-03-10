import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseReimbursementRoutingModule } from './expense-reimbursement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { EditFareRateComponent } from './edit-fare-rate/edit-fare-rate.component';
import { HistoryReimbursementComponent } from './history-reimbursement/history-reimbursement.component';
import { LayoutReimbursementComponent } from 'src/app/layouts/layout-reimbursement/layout-reimbursement.component';
import { DetailReimbursementComponent } from './detail-reimbursement/detail-reimbursement.component';
import { CreateFormReimbursementComponent } from './create-form-reimbursement/create-form-reimbursement.component';
import { PersonalVehicleComponent } from './create-form-reimbursement/personal-vehicle/personal-vehicle.component';
import { PublicTransportComponent } from './create-form-reimbursement/public-transport/public-transport.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploadComponent } from './create-form-reimbursement/document-upload/document-upload.component';
import { DetailsPetitionComponent } from './details-petition/details-petition.component';

@NgModule({
  declarations: [
    GoogleMapComponent,
    EditFareRateComponent,
    HistoryReimbursementComponent,
    LayoutReimbursementComponent,
    DetailReimbursementComponent,
    CreateFormReimbursementComponent,
    PersonalVehicleComponent,
    PublicTransportComponent,
    DocumentUploadComponent,
    DetailsPetitionComponent,
  ],
  imports: [
    CommonModule,
    ExpenseReimbursementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class ExpenseReimbursementModule {}
