import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/tasks/dtos/createTaskDto.dto';
import { DeleteTaskDto } from 'src/tasks/dtos/deleteTaskDto.dto';
import { EditTaskDto } from 'src/tasks/dtos/editTaskDto.dto';
import { Task as TaskEntity } from 'src/tasks/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TaskEntity) private readonly TaskRepository: Repository<TaskEntity>) {}

    getTasks(): Promise<TaskEntity[]> {
        return this.TaskRepository.find({
            order: {
                id: "ASC",
            }
        });
    }

    async getTaskById(hexId: string): Promise<TaskEntity> {
        return await this.TaskRepository.findOneOrFail({
            where: {
                hexId: hexId
            }
        }).catch(err => {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        });
    }

    async createTask(newTask: CreateTaskDto): Promise<TaskEntity> {
        newTask.hexId = uuidv4().substring(0,8);
        const newTaskObject = this.TaskRepository.create(newTask);
        return await this.TaskRepository.save(newTaskObject).catch(err => {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        });
    }

    async editTask(editTask: EditTaskDto): Promise<InsertResult> {
        await this.getTaskById(editTask.hexId);
        return await this.TaskRepository.upsert(
            [editTask],
            {
                conflictPaths: ["hexId"],
                skipUpdateIfNoValuesChanged: true
            }
        ).catch(err => {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        });
    }

    async deleteTask(deleteTask: DeleteTaskDto): Promise<DeleteResult> {
        await this.getTaskById(deleteTask.hexId);
        return await this.TaskRepository.delete(
            {hexId: deleteTask.hexId}
        ).catch(err => {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        })
    }
}
