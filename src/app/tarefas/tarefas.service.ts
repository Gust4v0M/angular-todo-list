import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  taskValue: string = ''

  constructor() { }

  setTask(task: any){
      this.taskValue = task
  }

 getTask(){
    return this.taskValue
  }
}
