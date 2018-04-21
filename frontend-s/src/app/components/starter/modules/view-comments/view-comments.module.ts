import { CommentsService } from './../../../../services/comments/comments.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewCommentsComponent } from './view-comments.component';
import { TimeAgoModule } from '../../../../pipes/time-ago/time-ago.module';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        TimeAgoModule
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
