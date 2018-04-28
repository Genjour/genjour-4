import { CommentsService } from './../../../../services/comments/comments.service';
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
    ],
    providers:[
        CommentsService
    ]
})

export class CommentsModule{}