import { AuthService } from './../../../../services/user_auth/auth.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SupportJournalService } from '../../../../services/support-journal/support-journal.service';
import { Router } from '@angular/router';
import { EndPoint } from '../../../../shared/global';
import * as io from "socket.io-client";

@Component({
  selector: 'app-support-journal-secondary',
  templateUrl: './support-journal-secondary.component.html',
  styleUrls: ['./support-journal-secondary.component.css']
})
export class SupportJournalSecondaryComponent implements OnInit, OnChanges {


  @Input() journalId :String;
  @Input() userId: String;
  

    private socket;
    supportJournal:boolean;
    supporterNumber: String;
    currentId:String;
  
  
    constructor(
      private supportJournalService: SupportJournalService,
      private authService: AuthService,
      private router: Router
    ) { }
  ngOnChanges(){
    this.supportJournalService.getSupportersCount(this.journalId).subscribe(data=>{
      //console.log(data);
      this.supporterNumber = data;
    })
    const flag = {
      journalId: this.journalId,
      currentId: this.currentId
    }
    this.supportJournalService.checkJournalSupportstatus(flag).subscribe(data=>{
      if(data.success){
        this.supportJournal = true;
      }else{
        this.supportJournal = false;
      }
    })
  }
    ngOnInit() {
  
      this.currentId=JSON.parse(localStorage.getItem('id'))
      this.socket = io.connect(EndPoint.host);
  

    }
  
    support(journalId,userId){
      if(this.authService.loggedIn()){
        const flag = {
          journalId:journalId,
          supportId:userId
        }
          if(this.supportJournal == true){
            this.supportJournal = false
          }else{
            this.supportJournal = true;
          }
        this.supportJournalService.SupportEmit(flag,this.socket);
        this.socket.on('supportEvent',(data)=>{
          console.log(data)
          this.supporterNumber = data;
       })
      }else{
        this.router.navigate(['/login']);
      }
    }
  

}
