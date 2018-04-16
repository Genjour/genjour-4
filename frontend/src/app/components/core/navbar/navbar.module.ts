import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '../../../directives/dropdown/dropdown.directive.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [NavbarComponent],
  exports:[NavbarComponent]
})
export class NavbarModule { }
