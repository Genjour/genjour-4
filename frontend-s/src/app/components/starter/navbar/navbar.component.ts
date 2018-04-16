import { User } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/user_auth/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../../services/shared/dataService.service';


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
    private dataService : DataService
  ) { }

  ngOnInit() {
    this.authService.getGenjourist().subscribe(profile=>{
      this.user = profile.user;
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
