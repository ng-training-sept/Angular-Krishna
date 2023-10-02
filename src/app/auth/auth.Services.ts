import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  private isLoggedIn = false;
  
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  
  authenticate(): void {
    this.isLoggedIn = true;
  }
}