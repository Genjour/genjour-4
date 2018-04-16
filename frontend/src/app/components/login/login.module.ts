import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
    declarations: [LoginComponent],
    providers:[AuthService]
  })
  
  export class LoginModule { }