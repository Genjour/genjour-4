
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthGaurd } from '../../gaurds/auth.gaurd';

const routes: Routes = [

  {
    path: ``,
    component: CoreComponent,
    children: [{
        path: ``,
        loadChildren: './journals/journals.module#JournalsModule'
      },
      {
        path:'journal/:journalId',
        loadChildren:'./article/article.module#ArticleModule'
      },
      {
        path:'genjourist/:id',
        loadChildren:'./genjourist/genjourist.module#GenjouristModule'
      }


    ]
  }
]


@NgModule({
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule],
  providers:[AuthGaurd] 
})


export class CoreRoutingModule {

}