import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [DropdownsComponent, ButtonComponent],
  exports: [DropdownsComponent, ButtonComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
