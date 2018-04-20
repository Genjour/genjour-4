import { Journal } from './../../../models/journal.mode';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../../services/user_auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit, OnChanges {

  user:User;
  journals:Journal;
  articles:any[]=[];
  quotations:any[]=[];
  supportersNumber:String;
  supportingNumber:String;
  currentGenjouristRoute:String;
  currentUserData:any[]=[];

  constructor(
    private authService : AuthService,
    private router : Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

          this.currentUser();
  
  }

  ngOnChanges(){
    this.currentUser();
  }
  
  currentUser() {
      this.authService.getGenjouristByUsername(this.route.snapshot.params.username).subscribe(x => {
        this.currentUserData = x;
        this.authService.userSubject.subscribe(
          data=> {
                    this.user = data;
                    if(x.genjouristId == this.user.genjouristId){
                      this.getOwnJournals();
                    }else{
                      this.getUserJournals();
                      console.log(this.journals)
                    }
              })  

        

      })


  }

  getOwnJournals(){
    let x =this.route.snapshot.params.username;
    this.authService.getOwnJournals(x).subscribe(data=>{
      this.journals = data;
    })
  }

  getUserJournals(){
    let x =this.route.snapshot.params.username;
    this.authService.getUserJournals(x).subscribe(data=>{
      this.journals = data;
      console.log(this.journals)
    })
  }

}
