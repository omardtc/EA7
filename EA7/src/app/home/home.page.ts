import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../openai.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';

interface Task {
  id?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  ideaPrompt: string = '';
  generatedIdea: string = '';
  
  taskTitle: string = '';
  taskDescription: string = '';
  taskList$: Observable<Task[]>;

  constructor(
    private router: Router,
    private openAiService: OpenaiService,
    private authService: AuthService,
    private taskService: TaskService 
  ) {
    this.taskList$ = this.taskService.getTasks();
  }

  ngOnInit() {}

  async generateIdea() {
    if (this.ideaPrompt.trim() === '') {
      alert('Por favor ingresa una idea inicial');
      return;
    }
    this.generatedIdea = await this.openAiService.generateIdea(this.ideaPrompt);
  }

  addTask() {
    if (this.taskTitle.trim() && this.taskDescription.trim()) {
      this.taskService.addTask(this.taskTitle, this.taskDescription);
      this.taskTitle = '';
      this.taskDescription = '';
    } else {
      alert('Por favor ingresa un título y una descripción para la tarea.');
    }
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  async logout() {
    try {
      await this.authService.logout();
      alert('Sesión cerrada exitosamente');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
