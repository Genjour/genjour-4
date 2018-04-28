
import { Component, OnInit } from '@angular/core';
import { SupportGenjouristService } from './../../../services/support-genjourist/support-genjourist.service';
import { Journal } from './../../../models/journal.mode';
import { AuthService } from '../../../services/user_auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

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
    private supportGenjouristService : SupportGenjouristService
  ) { }

  ngOnInit() {

    this.authService.getGenjouristByUsername(this.route.snapshot.params.username).subscribe(x => {
      this.currentUserData = x;

      this.supportGenjouristService.getSupportersNumber(x.genjouristId).subscribe(x=>{
        this.supportersNumber = x;
      })
  
      this.supportGenjouristService.getSupportingNumber(x.genjouristId).subscribe(x=>{
        this.supportingNumber = x;
      })
      
      let loggedInUser = JSON.parse(localStorage.getItem('id'));
          if(loggedInUser == x.genjouristId){
            console.log("own journals")
            this.getOwnJournals();
          }else{
            this.getUserJournals();
            console.log("users journals")
          }

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
