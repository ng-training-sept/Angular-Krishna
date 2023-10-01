// import { Component,OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CardComponent } from '../../card/card.component';
// import { Card } from '../../card/card.model';
// import { LOGGER } from 'src/app/Service/logger';
// import { LoggerService } from 'src/app/Service/logger.service';
// import { NewLoggerService } from 'src/app/Service/new-logger.service';
// import { AuthService } from 'src/app/Service/auth.service';


// @Component({
//   selector: 'app-grocery',
//   standalone: true,
//   imports: [CommonModule,
//   CardComponent],
//   providers: [
//     { provide: LOGGER, useClass: NewLoggerService}
//   ],
//   templateUrl: './grocery.component.html',
//   styleUrls: ['./grocery.component.scss']
// })
// export class GroceryComponent {
//     private readonly authService = inject(AuthService);
//     private readonly logger = inject(LOGGER);
  
//     groceries!: Card[];
  
//     ngOnInit(): void {
//       this.logger.log();
//       console.log('Grocery Component: ' + this.authService.whoAmI());
//       this.groceries = [
//         {
//           id: '1',
//           name: 'Tomato',
//           price: 100,
//           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
//           description: 'Tomato'
//         },
//         {
//           id: 'id2',
//           name: 'Onion',
//           price: 6000,
//           imageUrl: 'https://en.wikipedia.org/wiki/File:Mixed_onions.jpg',
//           description: 'Onion'
//         }
//       ];
//     }
  
// }
