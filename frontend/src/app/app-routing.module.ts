import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGaurd } from './gaurds/auth.gaurd';
import { ProtectedGaurd } from './gaurds/protected.gaurd';
import { EditArticleComponent } from './components/core/edit/article/edit-article/edit-article.component';
import { WriteQuotationComponent } from './components/core/write-quotation/write-quotation.component';
import { ArticleComponent } from './components/core/article/article.component';
import { SettingsComponent } from './components/core/settings/settings/settings.component';
import { ProfileComponent } from './components/core/profile/profile.component';
import { GenjouristComponent } from './components/core/genjourist/genjourist.component';
import { CategoryComponent } from './components/core/category/category.component';
import { NotificationsComponent } from './components/core/notifications/notifications.component';
import { FeedsComponent } from './components/core/feeds/feeds.component';
import { JournalsComponent } from './components/core/journals/journals.component';
import { WriteArticleComponent } from './components/core/write-article/write-article.component';
import { EditQuotationComponent } from './components/core/edit/quotation/edit-quotation/edit-quotation.component';



const appRoutes: Routes = [
    { path: ``, loadChildren: `./components/core/core.module#CoreModule`},
    {path: 'login', loadChildren: './components/login/login.module#LoginModule', canActivate:[ProtectedGaurd]},
    {path: 'register',loadChildren: './components/register/register.module#RegisterModule', canActivate:[ProtectedGaurd]},
    // {path: 'feeds', component:FeedsComponent, canActivate:[AuthGaurd] },
    // {path: 'notifications', component:NotificationsComponent, canActivate:[AuthGaurd] },
    // {path: 'category/:categoryName', component:CategoryComponent},
    // {path: 'genjourist/:id', component:GenjouristComponent},
    // {path: 'genjourist', component: ProfileComponent, canActivate:[AuthGaurd] },
    // {path: 'settings', component: SettingsComponent, canActivate:[AuthGaurd] },
    // {path: 'journal/:journalId', component:ArticleComponent},
    // {path: 'write-article', component:WriteArticleComponent, canActivate:[AuthGaurd]},
    // {path: 'write-quotation', component:WriteQuotationComponent, canActivate:[AuthGaurd]},
    // {path: 'edit/article/:articleId', component:EditArticleComponent, canActivate:[AuthGaurd]},
    // {path: 'edit/quotation/:quotationId', component:EditQuotationComponent, canActivate:[AuthGaurd]},
    {path: `not-found`,loadChildren: `./components/not-found/not-found.module#NotFoundModule` },
    {path: `**`, redirectTo: `not-found` }
  ]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})

export class AppRoutingModule {

}