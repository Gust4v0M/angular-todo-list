import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrl: './editar-tarefas.component.css',
})
export class EditarTarefasComponent {
  @Input() task!: string;
  @ViewChild('input') input!: ElementRef;

  setValue() {

    const Input: HTMLInputElement = this.input.nativeElement;

     Input.value 

     console.log(this.task)


  }
}
