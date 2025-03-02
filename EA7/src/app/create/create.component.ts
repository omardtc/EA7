import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Agrega FormsModule aquí

})
export class CreateComponent  implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  async onRegister() {
    try {
      await this.authService.register(this.email, this.password,);
      alert('Cuenta creada con éxito');
      this.router.navigate(['/home']); // Redirige después del registro
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  ngOnInit() {}

}
