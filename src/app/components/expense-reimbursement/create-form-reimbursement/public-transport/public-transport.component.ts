import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-public-transport',
  templateUrl: './public-transport.component.html',
  styleUrls: ['./public-transport.component.css'],
})
export class PublicTransportComponent implements OnInit {
  @Input() personalForm: FormGroup | any = {};

  constructor() {}

  ngOnInit() {}
}
