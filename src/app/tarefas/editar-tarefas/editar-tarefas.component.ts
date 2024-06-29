import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrl: './editar-tarefas.component.css'
})
export class EditarTarefasComponent {

  @Input() tasks: string[] = [];

  update(){
  
  }
}
