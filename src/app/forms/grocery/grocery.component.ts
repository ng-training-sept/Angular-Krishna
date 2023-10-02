import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from "../../components/card/card.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';
import { LOGGER } from 'src/app/Service/logger';
import { Logger } from 'src/app/Service/logger';
@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule,
  CardComponent,HttpClientModule],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent implements OnInit {
  // private readonly authService = inject(AuthService);
  // private readonly logger = inject(logger.LOGGER);

  // groceries!: Card[];

  // ngOnInit(): void {
  //   this.logger.log();
  //   console.log('Grocery Component: ' + this.authService.whoAmI());
  //   this.groceries = [
  //     {
  //       id: '1',
  //       name: 'Tomato',
  //       price: 100,
  //       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
  //       description: 'Tomato'
  //     },
  //     {
  //       id: 'id2',
  //       name: 'Onion',
  //       price: 6000,
  //       imageUrl: 'https://en.wikipedia.org/wiki/File:Mixed_onions.jpg',
  //       description: 'Onion'
  //     }
  //   ];
  // }
  grocery: Card[] = [];
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Card[]>(`${environment.baseUrl}/grocery`)
      .subscribe(grocery => this.grocery = grocery);
  }
}