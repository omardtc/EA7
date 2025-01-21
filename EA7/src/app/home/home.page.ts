import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  fecha = new FormControl('');
  nombre = new FormControl('');
  descripcion = new FormControl('');

  tareas: {nombre: string, fecha: string, descripcion: string|null, completada: boolean}[] = [];

  constructor() {}

  NewTarea(){
    if (!this.descripcion.value)this.descripcion.setValue('...');
    if (this.fecha.value && this.nombre.value){
      const NewTarea = {
        nombre: this.nombre.value,
        fecha: this.fecha.value,
        descripcion: this.descripcion.value,
        completada: false
      };

      this.tareas.push(NewTarea);

      this.nombre.setValue('');
      this.fecha.setValue('');
      this.descripcion.setValue('');
    }else{
      alert('Debe llenar los espacios indicados');
    }
  }

  
}