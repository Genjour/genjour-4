import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { GenjouristProfileComponent } from './genjourist-profile.component';



@NgModule({

    imports:[CommonModule],
    declarations:[GenjouristProfileComponent],
    exports:[GenjouristProfileComponent],
    providers:[AuthService]

})

export class GenjouristProfileModule{}