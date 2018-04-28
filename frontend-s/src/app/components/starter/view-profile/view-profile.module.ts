import { BookmarkModule } from './../modules/bookmark/bookmark.module';
import { CommentsModule } from './../modules/comments/comments.module';
import { SummaryHunderedModule } from './../../../pipes/summary-hundered/summary-hundered.module';
import { ViewProfileComponent } from './view-profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AgeCategoryModule } from '../../../pipes/age-category/age-category.module';
import { SupportJournalModule } from '../modules/support-journal/support-journal.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Ng2CloudinaryModule } from './../../../../../node_modules/ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { SupportGenjouristService } from '../../../services/support-genjourist/support-genjourist.service';

const routes: Routes = [
    {
        path:'',
        component:ViewProfileComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AgeCategoryModule,
        SummaryHunderedModule,
        SupportJournalModule,
        CommentsModule,
        BookmarkModule,
        ImageCropperModule,
        Ng2CloudinaryModule,
        FileUploadModule
    ],
    declarations:[
        ViewProfileComponent

    ],
    exports:[
        ViewProfileComponent
    ],
    providers:[
        SupportGenjouristService
    ]
})

export class ViewProfileModule{}