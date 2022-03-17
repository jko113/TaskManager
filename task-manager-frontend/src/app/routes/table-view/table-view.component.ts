import { Component, OnInit } from '@angular/core';
import { IDropdownOptions } from '../../components/dropdown/dropdown.component';
import { MatSelectChange } from '@angular/material/select';
import { ComponentCommunicatorService } from '../../services/component-communicator.service';
import { IItem, TaskControllerService } from '../../services/task-controller.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  public items: IItem[] = [];

  public statusDropdownOptions: IDropdownOptions[] = [
    {value: "notstarted", viewValue: "Not Started"},
    {value: "inprogress", viewValue: "In Progress"},
    {value: "completed", viewValue: "Completed"},
  ];

  ngOnInit() {
    const obs = this.taskService.getTasks();
    obs.subscribe((value) => {
      this.items = value;
    });
  }

  constructor(
    private taskService: TaskControllerService,
    private communicatorService: ComponentCommunicatorService) {
      //run code when component instantiate e.g make api call or set up variables 
  }
  
  onEdit (item: IItem) {
    this.communicatorService.editItem$.next(item);
  }

  onDelete (item: IItem) {
    this.communicatorService.deleteItem$.next(item);
  }

  updateDropdownCompletionStatus(item: IItem, selectEvent: MatSelectChange) {
    const newStatus = selectEvent.value;
    const itemID = item.id;
    item.completionStatus = newStatus;
    this.taskService.editTaskCompletionStatusById(itemID, newStatus);
    this.communicatorService.editItem$.next(undefined);
  }
}
