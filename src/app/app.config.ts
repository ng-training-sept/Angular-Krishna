import { ApplicationConfig, NgModule } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { authGuard } from './auth/auth.constants';
import { HttpClient, HttpClientModule } from '@angular/common/http';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{path: 'sports', component: SportsComponent}, // Eagerly loading route

  {path: 'grocery', component: GroceryComponent}, 

  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component')
  .then(m => m.SportsComponent) }, // Lazily loading route

  { path: 'home', loadComponent: () => import('./forms/home/home.component')
  .then(m => m.HomeComponent) }, // Lazily loading route

  { path: 'sports/card-item/:id', component: CardItemComponent},

  {path: 'grocery', 
  canActivate: [authGuard],
  loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes)},
];



export const appConfig: ApplicationConfig = {
  
  
  providers: [provideAnimations(),provideRouter(routes)]

};