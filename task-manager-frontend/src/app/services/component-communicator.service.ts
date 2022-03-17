import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IItem } from './task-controller.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicatorService {

  constructor() {}

  public editItem$: BehaviorSubject<IItem | undefined> 
  = new BehaviorSubject<IItem | undefined>(undefined);

  public deleteItem$: BehaviorSubject<IItem | undefined> 
  = new BehaviorSubject<IItem | undefined>(undefined);
}
