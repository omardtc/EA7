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
  fechafin = new FormControl('');
  nombre = new FormControl('');
  descripcion = new FormControl('');
  encargado = new FormControl('');
  telefono = new FormControl('');
  ubicacion = new FormControl('');

  tareas: {nombre: string, fecha: string, fechafin: string, descripcion: string|null, encargado: string|null, telefono: string|null, ubicacion: string, completada: boolean}[] = [];

  constructor() {}

  NewTarea(){
    if (!this.descripcion.value)this.descripcion.setValue('...');
    if (!this.encargado.value)this.encargado.setValue('...');
    if (!this.telefono.value)this.telefono.setValue('...');


    if (this.fecha.value && this.nombre.value && this.fechafin.value && this.ubicacion.value){
      const NewTarea = {
        nombre: this.nombre.value,
        fecha: this.fecha.value,
        fechafin: this.fechafin.value,
        descripcion: this.descripcion.value,
        encargado: this.encargado.value,
        telefono: this.telefono.value,
        ubicacion: this.ubicacion.value,
        completada: false
      };

      this.tareas.push(NewTarea);

      this.nombre.setValue('');
      this.fecha.setValue('');
      this.descripcion.setValue('');
      this.fechafin.setValue('');
      this.encargado.setValue('');
      this.telefono.setValue('');
      this.ubicacion.setValue('');
    }else{
      alert('Debe llenar los espacios indicados');
    }
  }

  
}