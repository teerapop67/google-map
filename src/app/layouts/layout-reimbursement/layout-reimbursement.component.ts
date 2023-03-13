import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-reimbursement',
  templateUrl: './layout-reimbursement.component.html',
  styleUrls: ['./layout-reimbursement.component.css'],
})
export class LayoutReimbursementComponent implements OnInit {
  @Input() justifyContent: string = 'space-between';
  @Input() margin: string = '0';
  @Input() titleHeader: string = '';

  ngOnInit() {
    switch (this.justifyContent) {
      default:
        this.justifyContent = `justify-content: ${this.justifyContent};`;
        break;
    }

    switch (this.margin) {
      default:
        this.margin = `margin: ${this.margin}`;
        break;
    }
  }
}
