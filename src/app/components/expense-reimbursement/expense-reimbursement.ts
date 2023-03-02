import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FareRateType } from 'src/app/interface/interface';
import { Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-expense-reimbursement',
  templateUrl: './expense-reimbursement.html',
  styleUrls: ['./expense-reimbursement.css'],
})
export class ExpenseReimbursementComponent implements OnInit {
  fareRate: FareRateType[] = [];

  constructor(private router: Router) {
    this.fareRate = [
      { distance: 'ระยะทางกิโลเมตรที่ 0-1', amountReimbursement: 50 },
      { distance: 'ระยะทางกิโลเมตรที่ 1-2', amountReimbursement: 50 },
      { distance: 'ระยะทาง 3 กิโลเมตรขึ้นไป', amountReimbursement: 5 },
    ];
  }

  ngOnInit() {}

  public isLink() {
    this.router.navigateByUrl('expense-reimbursement/g');
  }
}
