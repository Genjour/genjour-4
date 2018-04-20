import { AgeCategoryPipe } from './age-category.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        AgeCategoryPipe
    ],
    exports:[
        AgeCategoryPipe
    ]
})

export class AgeCategoryModule{}