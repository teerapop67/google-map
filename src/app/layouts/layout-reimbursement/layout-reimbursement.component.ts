import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-reimbursement',
  templateUrl: './layout-reimbursement.component.html',
  styleUrls: ['./layout-reimbursement.component.css'],
})
export class LayoutReimbursementComponent {
  @Input() styleHeader: string = 'space-between';
  @Input() titleHeader: string = '';
}
