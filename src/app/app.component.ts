
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';
import{HeaderComponent} from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
  CardComponent,
  FirstTaskComponent,
  FormsModule,
  SecondTaskComponent,
  HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  persons: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  AddCard(title: string): void {
    this.persons.push(title);
  }
}
