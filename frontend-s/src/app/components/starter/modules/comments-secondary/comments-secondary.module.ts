import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsSecondaryComponent } from './comments-secondary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        CommentsSecondaryComponent
    ],
    exports:[
        CommentsSecondaryComponent
    ],
    providers:[

    ]
})

export class CommentsSecondaryModule{}