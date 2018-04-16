import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { GlobalModule } from '../global/global.module';
import { CircleModule } from '../circle/circle.module';

const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GlobalModule,
    CircleModule
  ],
  declarations: [HomeComponent],
  providers:[]
})
export class HomeModule { }
