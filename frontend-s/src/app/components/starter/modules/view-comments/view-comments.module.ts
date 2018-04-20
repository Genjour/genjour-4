import { CommentsService } from './../../../../services/comments/comments.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewCommentsComponent } from './view-comments.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,

    ],
    declarations:[
        ViewCommentsComponent
    ],
    exports:[
        ViewCommentsComponent
    ],
    providers:[
        CommentsService
    ]
})

export class ViewCommentsModule{}
