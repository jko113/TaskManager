import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

export interface IDropdownOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() selectedValue: string = "";
  @Input() dropdownLabel: string = "";
  @Input() dropdownColor: string = "";
  @Input() dropdownOptions: IDropdownOptions[] = [];
  @Output() public selectFromDropdown: EventEmitter<MatSelectChange> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectAction ($event: MatSelectChange) {
    this.selectFromDropdown.emit($event);
  }
}
