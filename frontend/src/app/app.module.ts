import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BaseRequestOptions, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

// import { BookmarkComponent } from './components/core/panelComponents/bookmark/bookmark.component';
// import { ImageCropperModule } from 'ngx-image-cropper';
// import { NavbarComponent } from './components/core/navbar/navbar.component';
// import { FeedsComponent } from './components/core/feeds/feeds.component';
// import { ProfileComponent } from './components/core/profile/profile.component';
// import { RouterModule, Routes } from '@angular/router';
// import { ArticleComponent } from './components/core/article/article.component';
// import { SidenavComponent } from './components/core/sidenav/sidenav.component';
// import { JournalsComponent } from './components/core/journals/journals.component';
// import { GenjouristComponent } from './components/core/genjourist/genjourist.component';
// import { SupportArticleComponent } from './components/core/support/support-article/support-article.component';
// import { CategoryComponent } from './components/core/category/category.component';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { WriteArticleComponent } from './components/core/write-article/write-article.component';
// import { WriteQuotationComponent } from './components/core//write-quotation/write-quotation.component';
// import { SettingsComponent } from './components/core/settings/settings/settings.component';
// import { EditArticleComponent } from './components/core/edit/article/edit-article/edit-article.component';
// import { EditQuotationComponent } from './components/core/edit/quotation/edit-quotation/edit-quotation.component';
// import { RecommendUserComponent } from './components/core/feeds/new user/recommend-user/recommend-user.component';
// import { SupportBtnComponent } from './components/core/support/supportbtn/support-btn/support-btn.component';
// import { ArticleRecommendationComponent } from './components/core/feeds/new user/article-recommendation/article-recommendation.component';
// import { SearchComponent } from './components/core/navbar/search/search.component';
// import { Ng2CloudinaryModule } from './../../node_modules/ng2-cloudinary';
// import { FileUploadModule } from 'ng2-file-upload';
// import { CommentComponent } from './components/core/comment/comment.component';
// import { SupportJournalComponent } from './components/core/panelComponents/supportJournal/support-journal.component';
// import { PovComponent } from './components/core/panelComponents/pov/pov.component';
// import { ReplicateComponent } from './components/core/panelComponents/replicate/replicate.component';
// import { NotificationsComponent } from './components/core/notifications/notifications.component';
// import { BookmarksComponent } from './components/core/bookmarks/bookmarks.component';

import { AppComponent } from './app.component';

import { AuthGaurd } from './gaurds/auth.gaurd';
import { ProtectedGaurd } from './gaurds/protected.gaurd';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { PostService } from './services/post.service';
import { JournalsService } from './services/journals.service';
import { ProfileService } from './services/profile.service';
import { SupportService } from './services/support.service';
import { GenjouristService } from './services/genjourist.service';
import { ArticleService } from './services/article.service';
import { CategoryService } from './services/category/category.service';
import { ScriptLoaderService } from "./services/script-loader.service";
import { FeedsService } from './services/feeds/feeds.service';
import { QuotationsService } from './services/quotations.service';
import { SearchService } from './services/search/search.service';
import { CommentService } from './services/comment/comment.service';
import { DropdownModule } from './directives/dropdown/dropdown.directive.module';


// import { AgeCategoryPipe } from './components/core/profile/age-category.pipe';
// import { SummaryPipe } from './pipes/summary.pipe';
// import { ProfileImgPipe } from './pipes/profile-img.pipe';
// import { ffcharacter } from './pipes/ffcharacter.pipe';





@NgModule({
  declarations: [
    AppComponent,

    // NavbarComponent,
    // FeedsComponent,
    // ProfileComponent,
    // ArticleComponent,
    // SidenavComponent,
    // JournalsComponent,
    // WriteArticleComponent,
    // WriteQuotationComponent,
    // GenjouristComponent,
    // SupportArticleComponent,
    // CategoryComponent,
    // SettingsComponent,
    // EditArticleComponent,
    // EditQuotationComponent,
    // RecommendUserComponent,
    // SupportBtnComponent,
    // ArticleRecommendationComponent,
    // SearchComponent,
    // CommentComponent,
    // SupportJournalComponent,
    // ReplicateComponent,
    // PovComponent,
    // BookmarkComponent,
    // NotificationsComponent,
    // BookmarksComponent,
    // SummaryPipe,
    // ProfileImgPipe,
    // AgeCategoryPipe,
    // ffcharacter
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    AppRoutingModule,
    FormsModule,
    DropdownModule
    // InfiniteScrollModule,
    // Ng2CloudinaryModule,
    // FileUploadModule,
    // ImageCropperModule
  ],
  providers: [
    ValidateService,
    PostService,
    AuthService,
    AuthGaurd,
    ProtectedGaurd,
    JournalsService,
    ProfileService,
    SupportService,
    GenjouristService,
    ArticleService,
    CategoryService,
    ScriptLoaderService,
    FeedsService,
    QuotationsService,
    SearchService,
    CommentService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
