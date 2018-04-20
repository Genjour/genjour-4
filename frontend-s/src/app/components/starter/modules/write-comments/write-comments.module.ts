import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WriteCommentsComponent } from './write-comments.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        WriteCommentsComponent
    ],
    exports:[
        WriteCommentsComponent
    ]
})

export class WriteCommentsModule{}