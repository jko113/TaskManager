# TaskManager

## Purpose
This application is for managing tasks.

## Images

### Kanban View
This view is for handling tasks kanban style, with progression of tasks from an initial status of "not started" through to "in progress" and finally "complete". The number of pending and completed tasks appears at the bottom of the screen. It is possible to edit or delete the item using the pencil and trash can icons, which launch a modal window. It is also possible to modify completion status directly on the component, without having to launch a modal.
![kanban-view](https://github.com/jko113/TaskManager/blob/main/images/kanban-view.png)

### Table View
This view is for handling tasks using traditional tabular display. Like the kanban view, the number of pending and completed tasks is tabulated at the bottom of the screen. Again, it is possible to edit or delete via modal windows, or modify completion status directly without launching a modal.
![table-view](https://github.com/jko113/TaskManager/blob/main/images/table-view.png)

### Create Task
This modal window allows the user to create a new task. Upon entering valid data and clicking "Submit", the task will be created and display in the view that the user has selected. Clicking cancel aborts the operation.
![create-item](https://github.com/jko113/TaskManager/blob/main/images/create-item.png)

### Edit Task
The behavior mirrors "create task" functionality, except in the context of modifying an existing task.
![edit-item](https://github.com/jko113/TaskManager/blob/main/images/edit-item.png)

### Delete Task
This modal window allows the user to delete a task. Clicking cancel aborts the operation.
![delete-item](https://github.com/jko113/TaskManager/blob/main/images/delete-item.png)
