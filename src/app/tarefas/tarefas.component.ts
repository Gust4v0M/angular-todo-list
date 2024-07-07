import { Component, OnInit } from '@angular/core';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  inputValue: string = '';
  tasks: string[] = [];

  constructor(private tarefasService: TarefasService) { }

  ngOnInit() {
    this.tasks = this.tarefasService.getTasks();
  }

  addTask() {
    if (this.inputValue.trim()) {
      this.tasks.push(this.inputValue.trim());
      this.inputValue = '';
      this.saveTasks();
    }
  }

  saveTasks() {
    this.tarefasService.setTasks(this.tasks);
  }

  removeTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  }

  editTask(task: string) {
    this.tarefasService.setCurrentTask(task);
  }
}
