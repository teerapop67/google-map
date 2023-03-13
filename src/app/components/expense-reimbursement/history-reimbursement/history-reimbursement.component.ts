import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-reimbursement',
  templateUrl: './history-reimbursement.component.html',
  styleUrls: ['./history-reimbursement.component.css'],
})
export class HistoryReimbursementComponent implements OnInit {
  historyData: any[] = [];
  filteredTable: any[] = [];
  dateVal?: Date;
  constructor(private router: Router) {}

  ngOnInit() {
    this.dateVal = new Date();

    this.historyData = [
      {
        sequence: 1,
        date: '01/03/2566',
        typeOfTravel: 'พาหนะส่วนตัว',
        workName: 'HR SYSTEM',
        fare: 500,
        state: 'รออนุมัติ',
        reason: '-',
        cancel: 'ยกเลิก',
      },
      {
        sequence: 2,
        date: '03/03/2566',
        typeOfTravel: 'พาหนะส่วนตัว',
        workName: 'HR SYSTEM',
        fare: 150,
        state: 'อนุมัติ',
        reason: '-',
        cancel: 'ยกเลิก',
      },
      {
        sequence: 3,
        date: '05/03/2566',
        typeOfTravel: 'พาหนะส่วนตัว',
        workName: 'HR SYSTEM',
        fare: 120,
        state: 'ไม่อนุมัติ',
        reason: '-',
        cancel: 'ยกเลิก',
      },
    ];

    this.filteredTable = this.historyData;
  }

  public onStateChange(state: string): any {
    console.log('HI', state);
    if (state === 'อนุมัติ') return '#63BE00';
    if (state === 'รออนุมัติ') return '#F4AA3E';
    if (state === 'ไม่อนุมัติ') return '#DB0000';
  }

  isReverseDateFormat(date: string | any) {
    var splitString = date.split('-');
    var reverseArray = splitString.reverse();
    reverseArray[2] = Number(reverseArray[2]) + 543;
    var joinArray = reverseArray.join('/');
    return joinArray;
  }

  isFilteredTable(date: any) {
    const changeToTHFormat = this.isReverseDateFormat(date);
    this.filteredTable = this.historyData;

    this.filteredTable = this.filteredTable.filter(
      (user) => user.date === changeToTHFormat
    );
  }
}
