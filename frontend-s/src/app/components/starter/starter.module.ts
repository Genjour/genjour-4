import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { StarterComponent } from './starter.component';
import { CommonModule } from '@angular/common';
import { StarterRoutingModule } from './starter-routing.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  imports: [
    StarterRoutingModule,
    CommonModule,
    HomeModule,
    NavbarModule
  ],
  declarations: [StarterComponent]
})
export class StarterModule { }
