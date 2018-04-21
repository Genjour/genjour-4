import { BookmarkModule } from './../modules/bookmark/bookmark.module';
import { SummaryHunderedModule } from './../../../pipes/summary-hundered/summary-hundered.module';
import { ViewCommentsComponent } from './../modules/view-comments/view-comments.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ViewCategoryComponent } from './view-category.component';
import { CommentsModule } from '../modules/comments/comments.module';
import { ReplicateModule } from '../modules/replicate/replicate.module';
import { SupportJournalModule } from '../modules/support-journal/support-journal.module';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    {
        path:'',
        component:ViewCategoryComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        SummaryHunderedModule,
        CommentsModule,
        ReplicateModule,
        BookmarkModule,
        SupportJournalModule,
        RouterModule.forChild(routes)
    ],
    declarations:[
        ViewCategoryComponent,
        
    ],

})

export class ViewCategoryModule{}