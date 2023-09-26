import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-second-task',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    BrowserModule],
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss']
})
export class SecondTaskComponent {
  tabledata=[
    {Username:'Krishna', Address:'Ilam', Age:25},
    {Username:'Ram', Address:'Jhapa', Age:30},
    {Username:'Saugat', Address:'Ktm', Age:15},
    {Username:'XYZ', Address:'pokhara', Age:50}

  ];

}
