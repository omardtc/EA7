import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // ✅ Importamos AuthService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  ideaPrompt: string = '';
  generatedIdea: string = '';

  constructor(
    private router: Router,
    private openAiService: OpenaiService,
    private authService: AuthService // ✅ Inyectamos AuthService
  ) {}

  async generateIdea() {
    if (this.ideaPrompt.trim() === '') {
      alert('Por favor ingresa una idea inicial');
      return;
    }
    this.generatedIdea = await this.openAiService.generateIdea(this.ideaPrompt);
  }

  async logout() {
    try {
      await this.authService.logout(); // ✅ Llamamos a logout desde AuthService
      alert('Sesión cerrada exitosamente');
      this.router.navigate(['/login']); // ✅ Redirige al login
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
