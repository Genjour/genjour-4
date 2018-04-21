import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StarterComponent } from './starter.component';

const routes: Routes = [
  
  { 
    path:'',
    component: StarterComponent,
    children:[ 
      {
    path:'', 
    loadChildren: './home/home.module#HomeModule' },
    {
      path:'bookmarks',
      loadChildren:'./bookmark-page/bookmark-page.module#BookmarkPageModule'
    },
    {
      path:'notifications',
      loadChildren:'./notification/notification.module#NotificationModule'
    },
    {
      path:'journal/:journalId',
      loadChildren:'./view-journal/view-journal.module#ViewJournalModule'
    },
    {
      path:'genjourist/:username',
      loadChildren:'./view-profile/view-profile.module#ViewProfileModule'
    },
    {
      path:'category/:category',
      loadChildren:'./view-category/view-category.module#ViewCategoryModule'
    }

  ]
}
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule],
  providers:[] 
})
export class StarterRoutingModule { }