import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { authGuard } from './Service/auth.constants';

export const routes: Routes = [
  { path: '', redirectTo: '/grocery', pathMatch: 'full' },

  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) }, // Lazily loading route
  { path: 'sports/card-item/:id', component: CardItemComponent},
 
  { 
    path: 'grocery',
    loadChildren: () => import('./forms/grocery/grocery.component').then(m => m.GroceryComponent),
    canActivate: [authGuard]
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),
  provideRouter (routes)]
};
 