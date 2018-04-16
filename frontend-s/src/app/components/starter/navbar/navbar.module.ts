import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../../services/user_auth/auth.service';
import { DropdownModule } from '../../../directives/dropdown/dropdown.directive.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers:[AuthService]
})
export class NavbarModule { }
