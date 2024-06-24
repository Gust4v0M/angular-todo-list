import { Component,  } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
inputValue: string ='';
tasks: string[] = [];
trashIcon = '../assets/icons/image.png'
constructor(private forms: FormsModule){

}

addTask(){
  this.tasks.push(this.inputValue);
}

removeTask(task: string){
  const index = this.tasks.indexOf(task)
 if(index > -1){
  this.tasks.splice(index, 1)
 }
}
}
