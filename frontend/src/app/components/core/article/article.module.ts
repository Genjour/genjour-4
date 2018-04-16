
import { CommentComponent } from './../comment/comment.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SupportJournalComponent } from './../panelComponents/supportJournal/support-journal.component';
import { ReplicateComponent } from '../panelComponents/replicate/replicate.component';
import { BookmarkComponent } from './../panelComponents/bookmark/bookmark.component';
import { PovComponent } from './../panelComponents/pov/pov.component';

import { ffcharacterModule } from './../../../pipes/ffcharacter.pipe.module';


const routes: Routes = [
    {
        path: '',
        component:ArticleComponent
    }
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ffcharacterModule
    ],
    declarations:[
        ArticleComponent,
        SupportJournalComponent,
        ReplicateComponent,
        PovComponent,
        BookmarkComponent,
        CommentComponent
    ],
    exports:[],
    providers:[]
})

export class ArticleModule{}