import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() buttonText: string = "";
  @Input() buttonColor: string = "primary";
  @Input() buttonId: string = "";
  @Output() public clickAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onButtonClick() {
    this.clickAction.emit();
  }
}
