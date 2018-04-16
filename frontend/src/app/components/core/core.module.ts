import { FormsModule, NgForm } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { Panel1Component } from './shared/panel1/panel1.component';
import { Panel2Component } from './shared/panel2/panel2.component';


@NgModule({
  imports: [
    CoreRoutingModule,
    CommonModule,
    NavbarModule,
    FormsModule,
  ],
  declarations: [CoreComponent],
  exports:[]
})
export class CoreModule { }
