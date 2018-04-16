import { Panel1Module } from './../shared/panel1/panel1.module';
import { DropdownModule } from './../../../directives/dropdown/dropdown.directive.module';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { SummaryModule } from '../../../pipes/summary.pipe.module';

import { JournalsComponent } from './journals.component';
import { SupportArticleComponent } from '../support/support-article/support-article.component';
import { FeedsComponent } from '../feeds/feeds.component';


const routes: Routes = [
    {
        path: '',
        component:JournalsComponent
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SummaryModule,
    DropdownModule,
    Panel1Module
  ],
  declarations: [
    JournalsComponent,
    FeedsComponent,
  ],
  providers:[]
})
export class JournalsModule { }
