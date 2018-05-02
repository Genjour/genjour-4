import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/user_auth/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../../services/shared/dataService.service';
import { AgeCategoryPipe } from './../../../pipes/age-category/age-category.pipe';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user:User;
  action: String = "global";
  constructor(
    private authService : AuthService,
    private router : Router,
    private dataService : DataService,
    private ageCategoryPipe: AgeCategoryPipe
  ) { }

  ngOnInit() {
    this.authService.getGenjourist().subscribe(profile=>{
      this.user = profile.user;
      this.getAgeColor(this.user);
      this.authService.userDataBridge(this.user);
      },
      err => {
        console.log(err);
        return false;
      });
      this.dataService.data$.subscribe(data=>{
        this.action = data;
      })

 
  }

  getAgeColor(x){
    console.log(this.ageCategoryPipe.transform(x.dob));
    let y = this.ageCategoryPipe.transform(x.dob);
    switch(y){
      case '9-13'  : return 'firstGeneration'
      case '14-30' : return 'secondGeneration'
      case '30-50' : return 'thirdGeneration'
      case '50+'   : return 'fourthGeneration'
    }
  }

  logout(){
    this.authService.logout();
    console.log('User is logged out');
    this.router.navigate(['/']);
    return false;
  }

  toggle1(){
    this.dataService.switch('circle')
  }
  toggle2(){
    this.dataService.switch('global')
  }
}
