import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/user_auth/auth.service';
import { HttpModule } from '@angular/http/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DataService } from './services/shared/dataService.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RoutingModule
  ],
  bootstrap: [AppComponent],
  providers:[DataService]
})
export class AppModule { }
