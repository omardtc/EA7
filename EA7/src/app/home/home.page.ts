import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  imageData: any;
  selectedDate: string = new Date().toISOString().split('T')[0];

  constructor(private nasaService: NasaService) {}

  fetchImage() {
    if (this.selectedDate) {
      this.nasaService.getImageByDate(this.selectedDate).subscribe((data) => {
        this.imageData = data;
      });
    }
  }
}