import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private tasks: string[] = [];
  private currentTask: string | null = null;

  constructor() {
    if (this.isBrowser()) {
      this.tasks = this.getTasks();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  setTasks(tasks: string[]): void {
    this.tasks = tasks;
    if (this.isBrowser()) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  getTasks(): string[] {
    if (this.isBrowser()) {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }
    return this.tasks;
  }

  setCurrentTask(task: string): void {
    this.currentTask = task;
    if (this.isBrowser()) {
      localStorage.setItem('currentTask', task);
    }
  }

  getCurrentTask(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('currentTask');
    }
    return this.currentTask;
  }

  clearCurrentTask(): void {
    this.currentTask = null;
    if (this.isBrowser()) {
      localStorage.removeItem('currentTask');
    }
  }
}
