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
tasks: string[] = [];
valorAtual!: any;
valorFalse = false;

constructor(
            private forms: FormsModule,
            private tarefasService: TarefasService
            )
            {  }

ngOnInit(){
  this.novaFunc()
}

novaFunc(){
  const armazenarDados = this.tarefasService.getTask([this.tasks])

}

addTask(){
  this.tasks.push(this.inputValue);
  console.log("task " + this.tasks)
  console.log("Input value " + this.inputValue)
}

saveTask(){
  this.tarefasService.setTask(this.tasks)
}

removeTask(task: string){

  const index = this.tasks.indexOf(task)
 if(index > -1){
  this.tasks.splice(index, 1)
 }
 console.log(this.valorAtual)  
}


taskEditavel(task: string){
this.tarefasService.setTask(task) 
}
}



