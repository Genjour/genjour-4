import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth.service';

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
      FormsModule,
      RouterModule.forChild(routes),
      CommonModule,
      HttpModule,
      FormsModule,
      
    ],
    declarations: [RegisterComponent],
    providers:[AuthService]
  })
  
  export class RegisterModule { }