import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

export interface IItem {
  timestamp: string | null,
  completionStatus: string,
  name: string,
  description: string,
  id: string,
  pendingDeletion: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TaskControllerService {
  
  public testMode: boolean = true;

  constructor(private httpClient: HttpClient) {}

  // Test data

  // public testTasks: IItem[] = [{
  //   timestamp: "",
  //   completionStatus: "notstarted",
  //   name: 'do a thing',
  //   description: 'lorem ipsum',
  //   id: uuidv4().substring(0,8),
  //   pendingDeletion: false
  // },
  // {
  //   timestamp: "",
  //   completionStatus: "inprogress",
  //   name: 'do another thing',
  //   description: 'lorem ipsum lorem',
  //   id: uuidv4().substring(0,8),
  //   pendingDeletion: false
  // },
  // {
  //   timestamp: "",
  //   completionStatus: "completed",
  //   name: 'do yet another thing',
  //   description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  //   id: uuidv4().substring(0,8),
  //   pendingDeletion: false
  // }];

  // public tasks: IItem[] = this.testMode ? this.testTasks: [];

  public tasks: IItem[] = [];

  getTasks(): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>('http://localhost:1420/tasks');
  }

  getTaskById(id: string): IItem {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        return this.tasks[i];
      }
    }
    throw new Error('task ID not found');
  }

  editTaskCompletionStatusById(id: string, newStatus: string) {
    const taskToEdit = this.getTaskById(id);
    taskToEdit.completionStatus = newStatus;
  }

  deleteTask(id: string): void {
    for (let i = 0; i<this.tasks.length; i++) {
      if (id === this.tasks[i].id) {
        this.tasks.splice(i,1);
      }
    }
  }

  editTask(task: IItem): void {
    for (let i = 0; i<this.tasks.length; i++) {
      if (task.id === this.tasks[i].id) {
        this.tasks[i] = task;
      }
    }
  }

  createTask(task: IItem): void {
    let newID = uuidv4().substring(0,8);
    let newTask = {
      name: task.name,
      description: task.description,
      timestamp: "",
      completionStatus: "notstarted",
      id: newID,
      pendingDeletion: false
    }
    this.tasks.push(newTask);
  }
}
