import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanViewComponent } from './routes/kanban-view/kanban-view.component';
import { TableViewComponent } from './routes/table-view/table-view.component';

const routes: Routes = [
  {path: "table", component: TableViewComponent},
  {path: "kanban", component: KanbanViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [KanbanViewComponent, TableViewComponent];