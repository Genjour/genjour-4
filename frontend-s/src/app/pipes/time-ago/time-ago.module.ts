import { TimeAgoPipe } from './time-ago.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        TimeAgoPipe
    ],
    exports:[
        TimeAgoPipe
    ]
})

export class TimeAgoModule{}