import { BookmarkModule } from './../modules/bookmark/bookmark.module';
import { SupportJournalModule } from './../modules/support-journal/support-journal.module';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkPageComponent } from './bookmark-page.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentsModule } from '../modules/comments/comments.module';
import { SummaryHunderedModule } from '../../../pipes/summary-hundered/summary-hundered.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component:BookmarkPageComponent
    }
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        CommentsModule,
        SummaryHunderedModule,
        SupportJournalModule,
        BookmarkModule,
        FormsModule
    ],
    declarations:[
        BookmarkPageComponent,
    ],
    exports:[
        
    ]
})

export class BookmarkPageModule{}