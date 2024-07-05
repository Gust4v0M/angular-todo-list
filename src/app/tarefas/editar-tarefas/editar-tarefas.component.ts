import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrl: './editar-tarefas.component.css',
})
export class EditarTarefasComponent implements OnInit {
  @Input() task!: string;
  @ViewChild('input') input!: ElementRef;

  constructor(private tarefasService: TarefasService){ }
 ngOnInit() {
   // this.task = this.tarefasService.getTask();
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.value = this.task;
    }
  }

  atualizar() {
    const input: HTMLInputElement = this.input.nativeElement;

   // this.task = this.tarefasService.getTask();
    
    input.value = this.task;


  }

  }

