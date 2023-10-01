import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';
import{ HeaderComponent } from './components/header/header.component';
import { SportsComponent } from './forms/sports/sports.component';
import { RouterOutlet } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
  CardComponent,
  FirstTaskComponent,
  FormsModule,
  SecondTaskComponent,
  HeaderComponent,
  SportsComponent,
  RouterOutlet,
  GroceryComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // persons: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  // AddCard(title: string): void {
  //   this.persons.push(title);
  // }

  cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  addCard(title: string) {
    this.cardsTitle.push(title);
  }
}
