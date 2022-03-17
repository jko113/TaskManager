import { Controller, Get } from '@nestjs/common';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {
        console.log('constructed');
    }

    @Get('')
    getTasks() {
        console.log('called getTasks()');
        return this.tasksService.getTasks();
    }

}
