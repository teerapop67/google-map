import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography-header-input',
  templateUrl: './typography-header-input.component.html',
  styleUrls: ['./typography-header-input.component.css'],
})
export class TypographyHeaderInputComponent {
  @Input() title: string = '';
}
