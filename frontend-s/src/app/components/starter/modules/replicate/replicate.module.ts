import { FormsModule } from '@angular/forms';
import { ReplicateComponent } from './replicate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        ReplicateComponent
    ],
    exports:[
        ReplicateComponent
    ]

})

export class ReplicateModule{}