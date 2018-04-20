import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewJournalComponent } from './view-journal.component';
import { RouterModule, Routes } from '@angular/router';
import { SummaryFiftyModule } from '../../../pipes/summary-fifty/summary-fift.module';
import { SupportJournalSecondaryModule } from '../modules/support-journal-secondary/support-journal-secondary.module';
import { ReplicateSecondaryModule } from '../modules/replicate-secondary/replicate-secondary.module';
import { CommentsSecondaryModule } from '../modules/comments-secondary/comments-secondary.module';
import { BookmarkSecondaryModule } from '../modules/bookmark-secondary/bookmark-secondary.module';
import { ViewCommentsModule } from '../modules/view-comments/view-comments.module';
import { WriteCommentsModule } from './../modules/write-comments/write-comments.module';

const routes: Routes =[
    {
        path:'',
        component:ViewJournalComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        SupportJournalSecondaryModule,
        ReplicateSecondaryModule,
        CommentsSecondaryModule,
        BookmarkSecondaryModule,
        SummaryFiftyModule,
        WriteCommentsModule,
        ViewCommentsModule
    ],
    declarations:[
        ViewJournalComponent,

    ],
    exports:[
        ViewJournalComponent
    ]
})

export class ViewJournalModule{}
