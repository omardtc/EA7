import { Injectable } from '@angular/core';
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register(email: string, password: string){
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string){
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout(){
    return await signOut(this.auth);
  }

  async resetPassword(email: string){
    return await sendPasswordResetEmail(this.auth, email);
  }

}
