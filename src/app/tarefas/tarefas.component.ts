import { Component, OnInit } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent implements OnInit {
inputValue: string ='';
tasks: string[] = []
valorAtual!: any;
valorFalse = false;

constructor(
            private forms: FormsModule,
            private tarefasService: TarefasService
            )
            {  }

ngOnInit(){
  //this.tarefasService.getTask()
}


addTask(){
  this.tasks.push(this.inputValue);
  console.log("task " + this.tasks)
  console.log("Input value " + this.inputValue)
  this.saveTask()
}

saveTask(){
  this.tarefasService.setTasks(this.tasks )
}

removeTask(task: string){

  const index = this.tasks.indexOf(task)
 if(index > -1){
  this.tasks.splice(index, 1)
 }
 console.log(this.valorAtual)  
}


taskEditavel(task: any){
this.tarefasService.setTasks(task) 
}
} 



