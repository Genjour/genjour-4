import { GenjouristService } from './../../../services/genjourist.service';
import { SupportArticleComponent } from './../support/support-article/support-article.component';
import { GenjouristComponent } from './genjourist.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '../../../directives/dropdown/dropdown.directive.module';
import { AgeCategoryModule } from '../../../pipes/ageCategory/ageCategory.pipe.module';
import { SummaryModule } from '../../../pipes/summary.pipe.module';
import { SupportService } from '../../../services/support.service';

const routes: Routes = [
    {
        path: '',
        component:GenjouristComponent
    }
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        DropdownModule,
        AgeCategoryModule,
        SummaryModule,

    ],
    declarations:[
        GenjouristComponent,
        SupportArticleComponent
    ],

})

export class GenjouristModule{}