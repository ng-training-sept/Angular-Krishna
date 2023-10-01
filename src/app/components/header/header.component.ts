import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterLink, MatIconModule, MatDialogModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // private readonly dialog = inject(MatDialog);

  // constructor(private readonly authService: AuthService) {
  // }

  // addNew(): void {
  //   const dialogRef = this.dialog.open(ItemSaveUpdateComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result?.data) {
  //       console.log(result.data);
  //       // emit update event and call service from parent to update card
  //     }
  //   });
  // }

  // login(): void {
  //   this.authService.authenticate();
  // }
  private readonly authService = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  addNew(): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        console.log(result.data);
        // emit update event and call service from parent to update card
      }
    });
  }

    login(): void {
      this.authService.authenticate();
}
}


  
