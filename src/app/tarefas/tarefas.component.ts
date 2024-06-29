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
valorAtual!: any;

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


taskEditavel(){
  if(this.valorAtual ==! null && this.valorAtual > [this.tasks.length]){//função usada para pegar o valor do array que estamos utilizando
      this.valorAtual = this.tasks[this.valorAtual]
  }
}
}