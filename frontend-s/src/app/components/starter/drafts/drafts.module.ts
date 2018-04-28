import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DraftsComponent } from './drafts.component';
import { FormsModule } from '@angular/forms';
import { SummaryHunderedModule } from '../../../pipes/summary-hundered/summary-hundered.module';
import { SupportJournalModule } from '../modules/support-journal/support-journal.module';
import { BookmarkModule } from '../modules/bookmark/bookmark.module';
import { CommentsModule } from '../modules/comments/comments.module';

const routes : Routes = [
    {
        path:'',
        component:DraftsComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        SummaryHunderedModule,
        SupportJournalModule,
        BookmarkModule,
        CommentsModule,
    ],
    declarations:[
        DraftsComponent
    ],

})

export class DraftsModule{}