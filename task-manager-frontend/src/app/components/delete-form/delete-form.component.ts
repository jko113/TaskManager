import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../../services/task-controller.service';


@Component({
  selector: 'delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent implements OnInit {

  @Input() username: string = "";
  @Input() itemToBeDeleted: IItem = {name: "", description: "", timestamp: "", completionStatus: "notstarted", id: "", pendingDeletion: false};
  @Input() deletionApproved: boolean = false;
  @Input() deleteModalVisibility: boolean = false;

  @Output() public confirmDeletion = new EventEmitter();
  @Output() public cancelDeletion = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cancel() {
    this.cancelDeletion.emit(this.itemToBeDeleted);
  }

  confirm() {
    this.itemToBeDeleted.pendingDeletion = true;
    this.confirmDeletion.emit(this.itemToBeDeleted);
  }

}