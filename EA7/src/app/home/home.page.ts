import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExamenService } from '../examen.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  quote: any;
  author: any;

  peli = new FormControl('');
  year = new FormControl('');
  productor = new FormControl('');
  casa = new FormControl('');
  prota = new FormControl('');
  
  datos: {peli: string, year: string, productor: string, casa: string, prota: string}[] = [];
  
  constructor(private examenService: ExamenService) {}

  ngOnInit(){
    this.examenService.getQuote().subscribe((data)=>{
      this.quote = data;
    })
  }

  NewMovie(){
    if (this.peli.value && this.year.value && this.productor.value && this.casa.value && this.prota.value){
      const NewMovie = {
        peli: this.peli.value,
        year: this.year.value,
        productor: this.productor.value,
        casa: this.casa.value,
        prota: this.prota.value
      };

      this.datos.push(NewMovie);

      this.peli.setValue('');
      this.year.setValue('');
      this.productor.setValue('');
      this.casa.setValue('');
      this.prota.setValue('');

    }else{
      alert('Debe llenar todos los espacios');
    }
  }

}
