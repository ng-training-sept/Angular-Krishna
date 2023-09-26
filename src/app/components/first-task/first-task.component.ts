

import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatInput, MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

import { MatIcon, MatIconModule } from '@angular/material/icon';

 

@Component({

  selector: 'first-task',

  standalone: true,

  imports: [CommonModule, MatInputModule, FormsModule, MatIconModule],

  templateUrl: './first-task.component.html',

  styleUrls: ['./first-task.component.scss'],

})

export class FirstTaskComponent {

  username: string = 'user';

}