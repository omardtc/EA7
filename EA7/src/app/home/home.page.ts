import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  usuario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(1)]],
    apellido: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.email]],
    edad: ['', [Validators.min(18)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    aceptaTerminos: [false, [Validators.requiredTrue]],
  });

  usuarios: any[] = [];
  indiceEdicion: number | null = null; 
  constructor(private fb: FormBuilder) {}

  guardarDatos() {
    if (this.usuario.valid) {
      if (this.indiceEdicion === null) {
        this.usuarios.push(this.usuario.value);
      } else {
        this.usuarios[this.indiceEdicion] = this.usuario.value;
        this.indiceEdicion = null; 
      }

      this.usuario.reset(); 
    }
  }

  editarUsuario(index: number) {
    const usuario = this.usuarios[index];
    this.usuario.setValue({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      edad: usuario.edad,
      username: usuario.username,
      aceptaTerminos: usuario.aceptaTerminos,
    });
    this.indiceEdicion = index; 
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1); 
    if (this.indiceEdicion === index) {
      this.usuario.reset(); 
      this.indiceEdicion = null;
    }
  }
}
