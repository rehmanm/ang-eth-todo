import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
