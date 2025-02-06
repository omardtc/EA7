import { Component } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  
  jokeData: any;
  jokeCat: any;
 
  constructor(private jokeService: JokesService) {}

  ngOnInit(){
    this.jokeService.getJokes().subscribe((data)=>{
      this.jokeData = data;
    })
    this.jokeService.getCategories().subscribe((data)=>{
      this.jokeCat = data;
    })
  }

}
