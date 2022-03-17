import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() public htmlContent: TemplateRef<void> | null = null;
  @Input() public modalOpen: boolean = false;
  @Output() public close = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  closeModal() {
    this.modalOpen = false;
    this.close.emit();
  }

}
