import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FareRateType } from 'src/app/interface/interface';

@Component({
  selector: 'app-detail-reimbursement',
  templateUrl: './detail-reimbursement.component.html',
  styleUrls: ['./detail-reimbursement.component.css'],
})
export class DetailReimbursementComponent implements OnInit {
  fareRate: FareRateType[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.fareRate = [
      { distance: 'ระยะทางกิโลเมตรที่ 0-1', amountReimbursement: 50 },
      { distance: 'ระยะทางกิโลเมตรที่ 1-2', amountReimbursement: 50 },
      { distance: 'ระยะทาง 3 กิโลเมตรขึ้นไป', amountReimbursement: 5 },
    ];
  }
}
