import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './../app.component';

const appRoutes: Routes = [
    { path: ``, loadChildren: `./../components/starter/starter.module#StarterModule`},
    {
      path:'login',
      loadChildren:'./../components/login/login.module#LoginModule'
    },
    {
      path:'signup',
      loadChildren:'./../components/signup/signup.module#SignupModule'
    },
    {
      path:'**',
      loadChildren:'./../components/not-found/not-found.module#NotFoundModule'
    }
];

@NgModule({
  imports:  [RouterModule.forRoot(appRoutes)],
  exports:  [RouterModule],
  providers:[]
})

export class RoutingModule { }
