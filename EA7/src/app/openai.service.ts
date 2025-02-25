import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiKey: string = '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';


  constructor() { }

  async generateIdea(prompt: string): Promise<string>{
    const url = 'https://api.openai.com/v1/chat/completions';
    try {
      const response = await axios.post(url, {
        model: 'gpt-3.5-turbo',
        messages: [{role: 'system', content: 'Eres un generador de ideas'},
          {role: 'user', content: prompt}
        ],
        max_tokens: 100,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });
      console.log('Respuesta de OpenAi:', response.data);
      if(response.data && response.data.choices && response.data.choices[0].message){
        return response.data.choices[0].message.content.trim();
      }else{
        console.error('La respuesta no tiene el formato esperado');
        return 'Hubo un error con la respuesta de OpenAi';
      }
    } catch (error){
      console.error('Error al generar la idea:', error);
      return 'Hubo un error generando la idea. Intenta nuevamente';
    }
  }
}
