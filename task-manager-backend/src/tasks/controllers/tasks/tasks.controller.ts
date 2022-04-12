import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dtos/createTaskDto.dto';
import { DeleteTaskDto } from 'src/tasks/dtos/deleteTaskDto.dto';
import { EditTaskDto } from 'src/tasks/dtos/editTaskDto.dto';
import { GetSingleTaskDto } from 'src/tasks/dtos/getSingleTaskDto.dto';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('')
    getTasks() {
        return this.tasksService.getTasks();
    }

    @Get('getSingleTask/:id')
    getTask(@Param('id') id) {
        const getSingleTask = this.tasksService.getTaskById(id);
        if (getSingleTask) return getSingleTask;
        throw new HttpException('TaskId not found!', HttpStatus.BAD_REQUEST);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createTask(@Body() CreateTaskDto: CreateTaskDto) {
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Post('edit')
    @UsePipes(ValidationPipe)
    editTask(@Body() EditTaskDto: EditTaskDto) {    
        if (this.tasksService.editTask(EditTaskDto)) {
            return this.tasksService.editTask(EditTaskDto)
        } else {
            throw new HttpException('TaskId not found!', HttpStatus.BAD_REQUEST);
        }
    }

    @Delete('delete')
    @UsePipes(ValidationPipe)
    deleteTask(@Body() DeleteTaskDto: DeleteTaskDto) {
        const deleteTask = this.tasksService.deleteTask(DeleteTaskDto);
        if (deleteTask) {
            return deleteTask;
        } else {
            throw new HttpException('TaskId not found', HttpStatus.BAD_REQUEST);
        }
    }
}
