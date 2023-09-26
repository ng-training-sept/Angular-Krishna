import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from '../../directives/special.directive';
import { MatInputModule } from '@angular/material/input';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    SpecialDirective,
    MatInputModule,
    ReversePipe,
],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
//   title: string = 'Data Binding';
//   port: number = 4200;
//   imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
//   isLikeDisabled: boolean = false;
//   isShareDisabled: boolean = true;
//   size: string = '1.2 rem';
//   style: string = 'font-size: 1.2rem; color: cornflowerblue;';
//   server: {id: number, status: string} = {id: 10, status: 'offline'};
//   name:string='krishna';
//   count:number=0;
//    CountLike(){
//   this.count++;
//  }
//  DecreaseCount(){
//   if(this.count===0)
//   {
//     alert("Count cannot reduce from zero");
    

//   }
//   this.count--;

  
  

 //}

@Input({required: true}) titles: string[] = [];


@Output() titleEvent$ = new EventEmitter<string>();
 birthday = new Date(1988, 3, 15);

 onAddCard(title: string): void {
   this.titleEvent$.emit(title);
  }
 

//   @Input({required: true}) titles: string[] = [];
//   transform(input: string): string {
//   return input.split('').reverse().join();
//  }

// @Output() titleEvent$ = new EventEmitter<string>();

//   onAddCard(title: string): void {
//     this.titleEvent$.emit(title);
//   }
}
