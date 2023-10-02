import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../components/card/card.model';
import { CardComponent } from '../../components/card/card.component';
import { LOGGER } from 'src/app/Service/logger';

import { LoggerService } from 'src/app/Service/logger.service';
import { HttpClientModule } from '@angular/common/http';
import { SportsStore } from './sports.score';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule,
  CardComponent,HttpClientModule],
  providers: [
    AuthService,
    {provide: LOGGER, useClass: LoggerService},
    SportsStore
  ],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit{

  // private readonly authService = inject(AuthService);
  // readonly sportsStore = inject(SportsStore);

  // ngOnInit(): void {
  //  this.sportsStore.fetchSports();
  //  setTimeout(() => {
  //    this.sportsStore.saveSport({
  //      id: '1212',
  //      name: 'Volleyball',
  //      description: 'Testing',
  //      price: 500,
  //      imageUrl: ''
  //    });
  //  }, 5000)
  // }


  sports: Card[] = [];
  readonly sportsStore = inject(SportsStore);

  ngOnInit(): void {
    this.sportsStore.fetchSports();
}

}
