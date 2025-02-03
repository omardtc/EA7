import { Component } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemones:any=[];
  selectedPokemon:any = null;

  constructor(private pokeService: PokedexService, private router:Router) {}
  ngOnInit(){
    this.pokeService.getListPokemones().subscribe((data:any)=>{
      this.listPokemones=data.results;
      console.log(data.results);
      this.listPokemones.forEach((pokemon: any) => {
        this.pokeService.getDetailPokemon(pokemon.url).subscribe((details: any) => {
          pokemon.image = details.sprites.front_default; 
          pokemon.abilities = details.abilities.map((ability: any) => ability.ability.name); 
          pokemon.showDetails = false; 
        });
      });
    });

  }
  
  toggleDetails(pokemon: any) {
    pokemon.showDetails = !pokemon.showDetails;
  }

}