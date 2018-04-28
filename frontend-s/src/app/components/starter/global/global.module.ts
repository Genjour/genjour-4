import { CommentsService } from './../../../services/comments/comments.service';
import { BookmarkModule } from './../modules/bookmark/bookmark.module';
import { FormsModule } from '@angular/forms';
import { SupportJournalModule } from './../modules/support-journal/support-journal.module';
import { JournalsService } from './../../../services/journals/journals.service';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SummaryHunderedModule } from '../../../pipes/summary-hundered/summary-hundered.module';
import { SupportJournalService } from '../../../services/support-journal/support-journal.service';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { CommentsModule } from '../modules/comments/comments.module';
import { DropdownModule } from '../../../directives/dropdown/dropdown.directive.module';


@NgModule({
    declarations:[
        GlobalComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        SummaryHunderedModule,
        SupportJournalModule,
        BookmarkModule,
        CommentsModule,
        DropdownModule
    ],
    exports:[GlobalComponent],
    providers:[
        JournalsService, 
        SupportJournalService,
        BookmarkService ,
        CommentsService
    ]
})

export class GlobalModule{}