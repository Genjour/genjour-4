import { SupportJournalService } from './../../../../services/support-journal/support-journal.service';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FrontPanelComponent } from "./front-panel.component";
import { SupportJournalComponent } from '../../modules/support-journal/support-journal.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        SupportJournalComponent
    ],
    exports:[
        FrontPanelComponent
    ],
    declarations:[
        FrontPanelComponent
    ],
    providers:[SupportJournalService]
})

export class FronPanelModule{}