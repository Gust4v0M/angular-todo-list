import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

  setTasks(task: string[]){
      localStorage.setItem('key', JSON.stringify(task))

  }
 getTask(){

 return  localStorage.getItem('key')

  }
}
