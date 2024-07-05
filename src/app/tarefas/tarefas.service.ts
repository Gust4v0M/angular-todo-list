import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  taskValue: string = ''

  constructor() { }

  setTask(task: any){
      this.taskValue = task;
      localStorage.setItem('dados', task)
  }

 getTask(key: string){

  localStorage.getItem([key])


    return this.taskValue
  }
}
