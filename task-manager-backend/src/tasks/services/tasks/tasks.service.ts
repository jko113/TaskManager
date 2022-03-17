import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    constructor( ) {

    }

    getTasks() {
        return [{
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
    }
}
