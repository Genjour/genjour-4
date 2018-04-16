import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupportJournalComponent } from './support-journal.component';
import { SupportJournalService } from '../../../../services/support-journal/support-journal.service';

@NgModule({
    imports:[
        CommonModule,
    ],
    declarations:[SupportJournalComponent],
    exports:[SupportJournalComponent],
    providers:[SupportJournalService]
})

export class SupportJournalModule{}