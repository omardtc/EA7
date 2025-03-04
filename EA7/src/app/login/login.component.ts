import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent  implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']); // 👈 Redirige a la página principal después del login
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  ngOnInit() {}

}
