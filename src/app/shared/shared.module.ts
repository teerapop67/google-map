import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

@NgModule({
  declarations: [DropdownsComponent],
  exports: [DropdownsComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
