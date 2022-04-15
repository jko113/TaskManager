import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dtos/createTaskDto.dto';
import { DeleteTaskDto } from 'src/tasks/dtos/deleteTaskDto.dto';
import { EditTaskDto } from 'src/tasks/dtos/editTaskDto.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';
import { Task as TaskEntity } from 'src/tasks/typeorm';
import { DeleteResult, InsertResult } from 'typeorm';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('')
    getTasks(): Promise<TaskEntity[]> {
        return this.tasksService.getTasks();
    }

    @Get('getSingleTask/:id')
    getTask(@Param('id') id): Promise<TaskEntity> {
        const getSingleTask = this.tasksService.getTaskById(id);
        if (getSingleTask) return getSingleTask;
        throw new HttpException('TaskId not found!', HttpStatus.BAD_REQUEST);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createTask(@Body() CreateTaskDto: CreateTaskDto): Promise<TaskEntity> {
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Post('edit')
    @UsePipes(ValidationPipe)
    editTask(@Body() EditTaskDto: EditTaskDto): Promise<InsertResult> {
        return this.tasksService.editTask(EditTaskDto);
    }

    @Delete('delete')
    @UsePipes(ValidationPipe)
    deleteTask(@Body() DeleteTaskDto: DeleteTaskDto): Promise<DeleteResult> {
        return this.tasksService.deleteTask(DeleteTaskDto);
    }
}
