import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReplicateSecondaryComponent } from './replicate-secondary.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        ReplicateSecondaryComponent
    ],
    exports:[
        ReplicateSecondaryComponent
    ]
})

export class ReplicateSecondaryModule{}