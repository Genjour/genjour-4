import { BookmarkSecondaryComponent } from './bookmark-secondary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports:[
        CommonModule,
    ],
    declarations:[
        BookmarkSecondaryComponent
    ],
    exports:[
        BookmarkSecondaryComponent
    ]
})

export class BookmarkSecondaryModule{}