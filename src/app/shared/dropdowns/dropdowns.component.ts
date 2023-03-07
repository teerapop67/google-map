import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent implements OnInit {
  @Input() dropdownOptions: string[] = [];
  @Input() placeholderVal: string = '';
  @Input() validationAlert: string | undefined = '';
  @Output() optionChosenEvent = new EventEmitter<string | null | object>();

  filteredOptions: string[] = [];
  inputDropdownValue: string | null = '';
  detectionTouch: boolean = false;
  turnOnOption: boolean = false;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.dropdownOptions;
  }

  isTurnOnOption(optionValue: string | null) {
    this.turnOnOption = !this.turnOnOption;
    this.checkConditionError();
    if (!optionValue) return;
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(optionValue, this.detectionTouch)
    );
    this.inputDropdownValue = optionValue;
    this.filteredOptions = this.dropdownOptions;
  }

  onInputChange(e: any) {
    this.turnOnOption = true;
    this.checkConditionError();
    this.inputDropdownValue = e.target.value;
    console.log('asd', e.target.value);
    this.filteredOptions = this.searchFromArray(e.target.value);
    this.optionChosenEvent.emit(
      this.setValueBeforeSend(this.inputDropdownValue, this.detectionTouch)
    );
  }

  searchFromArray(value: string) {
    this.filteredOptions = this.dropdownOptions;
    let matches = [],
      i;
    for (i = 0; i < this.filteredOptions.length; i++) {
      if (this.filteredOptions[i].match(value)) {
        matches.push(this.filteredOptions[i]);
      }
    }

    return matches.length > 0 ? matches : this.checkFilteredCondition();
  }

  checkFilteredCondition() {
    if (this.inputDropdownValue) {
      this.turnOnOption = false;
    }
    return this.dropdownOptions;
  }

  setValueBeforeSend(value: string | null, validation: boolean) {
    const objectInputValue = {
      value: value,
      validate: validation,
    };
    return objectInputValue;
  }

  checkConditionError() {
    if (this.inputDropdownValue === '') {
      // Alert Err will pop up
      this.detectionTouch = true;
    } else {
      // Alert Err will fade out
      this.detectionTouch = false;
    }
  }
}
