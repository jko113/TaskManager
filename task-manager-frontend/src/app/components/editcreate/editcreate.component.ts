import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownOptions } from '../dropdown/dropdown.component';
import { IItem } from '../../services/task-controller.service';

@Component ({
    selector: 'edit-create',
    templateUrl: './editcreate.component.html',
    styleUrls: ['./editcreate.component.scss']
})
export class EditCreate implements OnInit {

  @Input() username: string = "";
  @Input() pendingItemData: IItem = {name: "", description: "", timestamp: "", completionStatus: "notstarted", hexId: "", pendingDeletion: false};
  @Input() modalVisibility: boolean = false;
  @Input() editMode: boolean = false;
  @Input() dropdownOptions: IDropdownOptions[] = [];
  private editModePendingItemData: IItem = {name: "", description: "", timestamp: "", completionStatus: "notstarted", hexId: "", pendingDeletion: false};
  public name = "name:";
  public description = "description:";

  @Output() public createOrEditAction = new EventEmitter();
  @Output() public cancelAction = new EventEmitter();

  ngOnInit() {
    this.editModePendingItemData = {...this.pendingItemData};
  }

  updateField (
      fieldName: "name" | "description",
      event: string
    ) {
    this.editModePendingItemData[fieldName] = event;
  }

  updateItemCompletionStatus (newStatus: string) {
    this.editModePendingItemData.completionStatus = newStatus;
  }

  sendNewItemToParent() {
    this.createOrEditAction.emit(this.editModePendingItemData);
  }

  cancel() {
    this.cancelAction.emit();
  }

}