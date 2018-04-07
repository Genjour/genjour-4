import { BookmarkComponent } from './components/panelComponents/bookmark/bookmark.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BaseRequestOptions, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterComponent } from './components/register/register.component';
import { JournalsComponent } from './components/journals/journals.component';
import { GenjouristComponent } from './components/genjourist/genjourist.component';
import { SupportArticleComponent } from './components/support/support-article/support-article.component';
import { CategoryComponent } from './components/category/category.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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

import { AuthGaurd } from './gaurds/auth.gaurd';
import { ProtectedGaurd } from './gaurds/protected.gaurd';

import { WriteArticleComponent } from './components/write-article/write-article.component';
import { WriteQuotationComponent } from './components/write-quotation/write-quotation.component';
import { SummaryPipe } from './directives/pipes/summary.pipe';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { AgeCategoryPipe } from './components/profile/age-category.pipe';
import { EditArticleComponent } from './components/edit/article/edit-article/edit-article.component';
import { EditQuotationComponent } from './components/edit/quotation/edit-quotation/edit-quotation.component';
import { RecommendUserComponent } from './components/feeds/new user/recommend-user/recommend-user.component';
import { SupportBtnComponent } from './components/support/supportbtn/support-btn/support-btn.component';
import { ArticleRecommendationComponent } from './components/feeds/new user/article-recommendation/article-recommendation.component';

import { SearchComponent } from './components/navbar/search/search.component';

import { Ng2CloudinaryModule } from './../../node_modules/ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { ProfileImgPipe } from './directives/pipes/profile-img.pipe';
import { TitleCasePipe } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { SupportJournalComponent } from './components/panelComponents/supportJournal/support-journal.component';
import { PovComponent } from './components/panelComponents/pov/pov.component';
import { ReplicateComponent } from './components/panelComponents/replicate/replicate.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';


const appRoutes: Routes = [
  {path: '', component:JournalsComponent },
  {path: 'login', component:LoginComponent, canActivate:[ProtectedGaurd]},
  {path: 'register', component:RegisterComponent, canActivate:[ProtectedGaurd]},
  {path: 'feeds', component:FeedsComponent, canActivate:[AuthGaurd] },
  {path: 'notifications', component:NotificationsComponent, canActivate:[AuthGaurd] },
  {path: 'category/:categoryName', component:CategoryComponent},
  {path: 'genjourist/:id', component:GenjouristComponent},
  {path: 'genjourist', component: ProfileComponent, canActivate:[AuthGaurd] },
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGaurd] },
  {path: 'journal/:journalId', component:ArticleComponent},
  {path: 'write-article', component:WriteArticleComponent, canActivate:[AuthGaurd]},
  {path: 'write-quotation', component:WriteQuotationComponent, canActivate:[AuthGaurd]},
  {path: 'edit/article/:articleId', component:EditArticleComponent, canActivate:[AuthGaurd]},
  {path: 'edit/quotation/:quotationId', component:EditQuotationComponent, canActivate:[AuthGaurd]},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FeedsComponent,
    ProfileComponent,
    ArticleComponent,
    SidenavComponent,
    RegisterComponent,
    JournalsComponent,
    WriteArticleComponent,
    WriteQuotationComponent,
    SummaryPipe,
    GenjouristComponent,
    SupportArticleComponent,
    CategoryComponent,
    SettingsComponent,
    AgeCategoryPipe,
    EditArticleComponent,
    EditQuotationComponent,
    RecommendUserComponent,
    SupportBtnComponent,
    ArticleRecommendationComponent,
    SearchComponent,
    ProfileImgPipe,
    CommentComponent,
    SupportJournalComponent,
    ReplicateComponent,
    PovComponent,
    BookmarkComponent,
    NotificationsComponent,
    BookmarksComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
    InfiniteScrollModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    ImageCropperModule
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
