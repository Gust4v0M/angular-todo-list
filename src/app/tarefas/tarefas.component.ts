import { Component,  } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { Observable } from 'rxjs';
import { task } from './tarefas';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
inputValue: string ='';
$task! : Observable<task>;
trashIcon = '../assets/icons/image.png'
constructor(private forms: FormsModule){

}

addTask(){
  this.$task?.push(this.inputValue);
}

removeTask(task: string){
  const index = this.tasks.indexOf(task)
 if(index > -1){
  this.$task?.splice(index, 1)
 }
}
}
