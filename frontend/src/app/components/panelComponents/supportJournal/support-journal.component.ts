import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { SupportService } from '../../../services/support.service';
import { user } from './../../models/user';

@Component({
  selector: 'app-support-journal',
  templateUrl: './support-journal.component.html',
  styleUrls: ['./support-journal.component.css']
})
export class SupportJournalComponent implements OnInit {

  @Input() journalId: String;
  @Input() userId: String;


  user:user;
  supportStatus: boolean;
  supportersNumber:String;


  constructor(
    private authService: AuthService,
    private supportService: SupportService,
    private router : Router
  ) { }
  
  

  ngOnInit() {
    
    this.supportService.getJournalSupportersCount(this.journalId).subscribe(data=>{
      this.supportersNumber = data;
      console.log(data);
    })



  }

  support(journalId, userId){

     //-----------------------------------support button animatation--------------------------------
    if(this.authService.loggedIn()){

      if(this.supportStatus == true){
        this.supportStatus=false;
      }else{
        this.supportStatus=true;
      }
    //----------------------------------- end button animatation--------------------------------

      this.supportService.supportJournal(journalId, userId).subscribe(data=>{
        //console.log(data);
        this.supportService.getJournalSupportersCount(this.journalId).subscribe(data=>{
          //console.log(data);
          this.supportersNumber = data;
        })
        this.supportService.journalSupporters(this.journalId).subscribe(data=>{
          console.log(data);
        })

      });

      
    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }



  }

}
