import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

export interface IItem {
  timestamp: string | null,
  completionStatus: string,
  name: string,
  description: string,
  hexId: string,
  pendingDeletion: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TaskControllerService {

  constructor(private httpClient: HttpClient) {}

  public tasks: IItem[] = [];

  getTasks(): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>('http://localhost:1420/api/tasks');
  }

  getTaskById(id: string): Observable<IItem> {
    return this.httpClient.get<IItem>(`http://localhost:1420/api/tasks/getSingleTask/${id}`);
  }
  
  deleteTask(hexId: string): Observable<boolean> {
    return this.httpClient.delete<boolean>
    ('http://localhost:1420/api/tasks/delete', {body: {hexId: hexId}});
  } 

  editTask(task: IItem): Observable<IItem> {
    return this.httpClient.post<any>('http://localhost:1420/api/tasks/edit', task);
  }

  createTask(task: IItem): Observable<boolean> {
    let newTask = {
      name: task.name,
      description: task.description,
      timestamp: "",
      completionStatus: "notstarted",
      hexId: uuidv4().substring(0,8),
      pendingDeletion: false
    }

    return this.httpClient.post<boolean>('http://localhost:1420/api/tasks/create', newTask);
  }
}
