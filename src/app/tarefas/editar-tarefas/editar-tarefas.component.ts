import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TarefasService } from '../tarefas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrl: './editar-tarefas.component.css',
})
export class EditarTarefasComponent implements OnInit {
  @Input() task!: string| null;
  @ViewChild('input') input!: ElementRef;

  constructor(private tarefasService: TarefasService,
              private router: Router
  ){ }
 ngOnInit() {
   this.task = this.tarefasService.getTask();
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.value = this.task;
    }
  }

  atualizar() {
    const input = this.input.nativeElement;

    if(this.input){
      this.task = input
      this.tarefasService.setTasks(input)
      this.router.navigate([''])
    }

  }

  }

