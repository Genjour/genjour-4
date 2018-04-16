import { BookmarkComponent } from './bookmark.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        BookmarkComponent
    ],
    exports:[
        BookmarkComponent
    ]
})

export class BookmarkModule{}