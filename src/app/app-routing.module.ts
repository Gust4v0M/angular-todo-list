import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarTarefasComponent } from './tarefas/editar-tarefas/editar-tarefas.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  { path: '', component: TarefasComponent },
  { path: 'edit', component: EditarTarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
