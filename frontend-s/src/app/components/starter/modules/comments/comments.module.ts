import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        CommentsComponent
    ],
    exports:[
        CommentsComponent
    ]
})

export class CommentsModule{}