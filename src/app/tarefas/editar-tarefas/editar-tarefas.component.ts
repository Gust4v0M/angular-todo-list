import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TarefasService } from '../tarefas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css'],
})
export class EditarTarefasComponent implements OnInit {
  @ViewChild('input') input!: ElementRef;
  task: string | null = '';

  constructor(private tarefasService: TarefasService, private router: Router) {}

  ngOnInit() {
    this.task = this.tarefasService.getCurrentTask();
  }

  ngAfterViewInit() {
    if (this.input && this.task) {
      this.input.nativeElement.value = this.task;
    }
  }

  atualizar() {
    if (this.input && this.task !== null) {
      const updatedTask = this.input.nativeElement.value;

      // Atualizar a tarefa na lista de tarefas
      let tasks = this.tarefasService.getTasks();
      const index = tasks.indexOf(this.task);
      if (index > -1) {
        tasks[index] = updatedTask;
        this.tarefasService.setTasks(tasks);
      }

      // Limpar a tarefa atual e navegar de volta para a lista de tarefas
      this.tarefasService.clearCurrentTask();
      this.router.navigate(['/']);
    }
  }
}
