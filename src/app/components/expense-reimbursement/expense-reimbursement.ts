import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-expense-reimbursement',
  templateUrl: './expense-reimbursement.html',
  styleUrls: ['./expense-reimbursement.css'],
})
export class ExpenseReimbursementComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
