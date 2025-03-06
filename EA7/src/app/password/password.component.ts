import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // ✅ Importamos AuthService
import { Router } from '@angular/router'; // ✅ Importamos Router
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PasswordComponent  implements OnInit {
  email: string = '';
  message: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onResetPassword() {
    try {
      await this.authService.resetPassword(this.email);
      this.message = 'Se ha enviado un enlace de recuperación a tu correo.';
      this.errorMessage = '';
    } catch (error: any) {
      this.errorMessage = 'Error al enviar el correo. Verifica tu dirección.';
      this.message = '';
    }
  }

  ngOnInit() {}

}
