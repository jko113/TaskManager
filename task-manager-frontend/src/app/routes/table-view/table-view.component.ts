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
    this.taskService.getTasks().subscribe((value) => {
      this.items = value;
    });

    this.communicatorService.deleteItem$.subscribe((deleteValue) => {
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
    });

    this.communicatorService.editItem$.subscribe((editValue) => {
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
    });

    this.communicatorService.createItem$.subscribe((createValue) => {
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
    });
  }

  constructor(
    private taskService: TaskControllerService,
    private communicatorService: ComponentCommunicatorService) {
  }
  
  onEdit (item: IItem) {
    this.communicatorService.editItem$.next(item);
  }

  onDelete (item: IItem) {
    this.communicatorService.deleteItem$.next(item);
  }

  updateDropdownCompletionStatus(item: IItem, selectEvent: MatSelectChange) {
    const newStatus = selectEvent.value;
    item.completionStatus = newStatus;

    this.taskService.editTask(item).subscribe((value) => {
      if (value) this.communicatorService.editItem$.next(undefined);
    });
  }
}
