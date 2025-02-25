import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { IonHeader, IonToolbar, IonTitle, IonCard, IonContent, IonButton, IonItem, IonLabel, IonInput, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonCard, IonContent, IonButton, IonItem, IonLabel, IonInput, IonCardContent, IonCardHeader, IonCardTitle],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router, private openAiService: OpenaiService) {}

  ideaPrompt: string = '';
  generatedIdea: string = '';

  async generateIdea(){
    if(this.ideaPrompt.trim() === ''){
      alert('Por favor ingresa una idea inicial');
      return;
    }
    this.generatedIdea = await this.openAiService.generateIdea(this.ideaPrompt);
  }

}
