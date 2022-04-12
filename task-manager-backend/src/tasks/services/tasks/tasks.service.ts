import { Body, Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dtos/createTaskDto.dto';
import { DeleteTaskDto } from 'src/tasks/dtos/deleteTaskDto.dto';
import { EditTaskDto } from 'src/tasks/dtos/editTaskDto.dto';
import { GetSingleTaskDto } from 'src/tasks/dtos/getSingleTaskDto.dto';
import { Task } from 'src/tasks/types/tasks';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    constructor( ) {}

    private tasks: Task[] = [{
        timestamp: "",
        completionStatus: "notstarted",
        name: 'do a thing',
        description: 'lorem ipsum',
        id: uuidv4().substring(0,8),
        pendingDeletion: false
    },
    {
        timestamp: "",
        completionStatus: "inprogress",
        name: 'do another thing',
        description: 'lorem ipsum lorem',
        id: uuidv4().substring(0,8),
        pendingDeletion: false
    },
    {
        timestamp: "",
        completionStatus: "completed",
        name: 'do yet another thing',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        id: uuidv4().substring(0,8),
        pendingDeletion: false
    }];

    getTasks() {
        return this.tasks;
    }

    getTaskById(id: string) {
        return this.tasks.find((task) => {
            return id === task.id;
        });
    }

    createTask(newTask: CreateTaskDto) {
        const newTaskWithId = {...newTask, id: uuidv4().substring(0,8)}
        return this.tasks.push(newTaskWithId);
    }

    editTask(editTask: EditTaskDto) {
        const editTaskId = editTask.id;

        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === editTaskId) {
                this.tasks[i] = editTask;
                return true;
            }
        }
        return false;
    }

    deleteTask(deleteTask: DeleteTaskDto) {

        for (let i = 0; i < this.tasks.length; i++) {
            if (deleteTask.id === this.tasks[i].id) {
                this.tasks.splice(i,1);
                return true;
            }
        }
        return false;
    }
}
