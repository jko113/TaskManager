import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IDropdownOptions } from './components/dropdown/dropdown.component';
import { ComponentCommunicatorService } from './services/component-communicator.service';
import { IItem, TaskControllerService } from './services/task-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManager';

  public username = 'Test User'
  public completedTasksTotal: number = 0;
  public createOrEditModalVisibility: boolean = false;
  public deleteModalVisibility: boolean = false;
  public editMode: boolean = false;
  public pendingItemData: IItem = {name: "", description: "", timestamp: "", completionStatus: "notstarted", id: "", pendingDeletion: false};
  public internalPendingItemData: IItem = {name: "", description: "", timestamp: "", completionStatus: "notstarted", id: "", pendingDeletion: false};
  public itemToBeDeleted: IItem = {name: "", description: "", timestamp: "", completionStatus: "notstarted", id: "", pendingDeletion: false};
  public items: IItem[] = [];
  @ViewChild('createOrEditTemplate', {read: TemplateRef, static: true}) createOrEditFormTemplate: TemplateRef<void> | null = null;
  @ViewChild('deleteTemplate', {read: TemplateRef, static: true}) deleteFormTemplate: TemplateRef<void> | null = null;

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
    this.calculateCompletedTasks();
    this.communicatorService.editItem$.subscribe((item) => {
      if (item) {
        this.modalToggle();
        this.pendingItemData = item;
        this.editMode = true;
      }
      this.calculateCompletedTasks();
    });

    this.communicatorService.deleteItem$.subscribe((item) => {
      if (item) {
        this.itemToBeDeleted = item;
        this.deleteModalVisibility = true;
      }
    });

    this.taskService.getTasks().subscribe((value) => {
      this.items = value;
    });
  }

  modalToggle() {
    this.createOrEditModalVisibility = true;
  }

  closeCreateOrEditModal () {
    this.createOrEditModalVisibility = false;
    this.editMode = false;
    this.pendingItemData = {name: "", description: "", timestamp: "", completionStatus: "notstarted", id: "", pendingDeletion: false};
  }

  closeDeleteModal () {
    this.deleteModalVisibility = false;
  }

  onDeleteSubmit (item: IItem) {
    if (item.pendingDeletion === true) {
      this.taskService.deleteTask(item.id);
      this.taskService.getTasks().subscribe((value) => {
        this.items = value;
      });
      this.calculateCompletedTasks();
    }

    this.closeDeleteModal();
  }

  createOrEditItem (e: IItem) {
    if (this.editMode) {
      this.taskService.editTask(e);
    } else {
      this.taskService.createTask(e);
    }

    this.calculateCompletedTasks();
    this.createOrEditModalVisibility = false;
    this.editMode=false;
    this.pendingItemData = {name: "", description: "", timestamp: "", completionStatus: "notstarted", id: "", pendingDeletion: false};
  }

  calculateCompletedTasks () {
    let runningTotal = 0;

    for (let i = 0; i<this.items.length; i++) {
      if (this.items[i].completionStatus==="completed") {
        runningTotal++;
      }
    }
    this.completedTasksTotal = runningTotal;
  }

}
