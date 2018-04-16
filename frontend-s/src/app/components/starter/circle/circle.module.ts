import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CircleComponent } from './circle.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        CircleComponent
    ],
    declarations:[
        CircleComponent
    ]

})
export class CircleModule{}