import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent  {
inputValue: string ='';
tasks: string[] = [];
valorAtual!: any;
valorFalse = false;

constructor(private forms: FormsModule){

}

addTask(){
  this.tasks.push(this.inputValue);
  console.log("task " + this.tasks)
  console.log("Input value " + this.inputValue)
}

removeTask(task: string){

  const index = this.tasks.indexOf(task)
 if(index > -1){
  this.tasks.splice(index, 1)
 }
 console.log(this.valorAtual)  
}


// taskEditavel(task: string){
// this.valorAtual = task
 
// }
}



