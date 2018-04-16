import { SupportJournalSecondaryComponent } from './support-journal-secondary.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupportJournalService } from '../../../../services/support-journal/support-journal.service';

@NgModule({
    imports:[
        CommonModule,
    ],
    exports:[
        SupportJournalSecondaryComponent
    ],
    declarations:[
        SupportJournalSecondaryComponent
    ],
    providers:[
        SupportJournalService
    ]


})

export class SupportJournalSecondaryModule{}