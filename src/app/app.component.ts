import { Component, NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule,CardComponent,HeaderComponent,RouterOutlet,DirectivesComponent]
})

export class AppComponent {
  // persons: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  // AddCard(title: string): void {
  //   this.persons.push(title);
  // }

  // cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  // addCard(title: string) {
  //   this.cardsTitle.push(title);
  // }

  title = 'angularBasic';
  cardsTitle: string[] = ['Ram', 'Shyam', 'Hari', 'Sita', 'Gita'];
  addCard(title: string) {
    this.cardsTitle.push(title);
  }
  removeCard(i:number){
    this.cardsTitle.splice(i,1);
  }
}

