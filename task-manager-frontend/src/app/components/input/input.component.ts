import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputLabel: string = "";
  @Input() inputColor: string = "";
  @Input() inputType: "text" | "number" = "text";
  @Input() inputData: string = "";

  @Output() public typeAction: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  updateField(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.typeAction.emit(target.value);
  }

}


