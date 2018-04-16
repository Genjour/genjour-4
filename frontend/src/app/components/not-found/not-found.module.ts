import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: '',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,   
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
