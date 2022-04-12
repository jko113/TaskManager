import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { IDropdownOptions } from '../../components/dropdown/dropdown.component';
import { ComponentCommunicatorService } from '../../services/component-communicator.service';
import { IItem, TaskControllerService } from '../../services/task-controller.service';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.scss']
})
export class KanbanViewComponent implements OnInit {

  public items: IItem[] = [];

  public statusDropdownOptions: IDropdownOptions[] = [
    {value: "notstarted", viewValue: "Not Started"},
    {value: "inprogress", viewValue: "In Progress"},
    {value: "completed", viewValue: "Completed"},
  ];
  
  constructor(
    private taskService: TaskControllerService,
    private communicatorService: ComponentCommunicatorService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((value) => {
      this.items = value;
    });

    this.communicatorService.deleteItem$.subscribe((deleteValue) => {
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
    });

    this.communicatorService.createItem$.subscribe((createValue) => {
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
    });

    this.communicatorService.editItem$.subscribe((editValue) => {
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
    });
  }

  updateDropdownCompletionStatus(item: IItem, selectEvent: MatSelectChange) {
    const newStatus = selectEvent.value;
    item.completionStatus = newStatus;

    this.taskService.editTask(item).subscribe((value) => {
      if (value) this.communicatorService.editItem$.next(undefined);
    });
  }

  onEdit (item: IItem) {
    this.communicatorService.editItem$.next(item);
  }

  onDelete (item: IItem) {
    this.communicatorService.deleteItem$.next(item);
  }
}
