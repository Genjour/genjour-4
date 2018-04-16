import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './signup.component';
import { AuthService } from '../../services/user_auth/auth.service';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '',
        component: SignupComponent
    }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    HttpModule,
        
  ],
  declarations: [SignupComponent],
  providers:[AuthService]
})

export class SignupModule{}