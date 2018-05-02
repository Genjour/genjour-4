import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../services/user_auth/auth.service';
import { JournalsService } from '../../../services/journals/journals.service';
import { NgForm } from '@angular/forms';
import { CommentsService } from '../../../services/comments/comments.service';
import { EndPoint } from '../../../shared/global';
import * as io from "socket.io-client";

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  selectedRow: number;
  ReplicatedRow:number;
  status : boolean = true;
  user: any;
  journalId :String;
  journals: any[]=[];
  commentInput: String;
  private socket;

  @ViewChild('commentBoxInput') commentBoxInput: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private journalService: JournalsService,
    private route: ActivatedRoute,
    private commentsService: CommentsService,
  ) { }

  
  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    });
    this.journalService.getJournal().subscribe(data=>{
      this.journals = data;

    })

    this.socket = io.connect(EndPoint.host);
  }

  submitComment(journalId){
    let currentId=JSON.parse(localStorage.getItem('id'))

    if(this.authService.loggedIn()){
     const flag = {
       genjouristId: currentId,
       journalId:    journalId,
       refrenceId:   "parent",
       comment:      this.commentInput,
 
     }
 
     if (flag.comment == undefined || flag.comment == null) {
       console.log("write something comment cannot be blank")
       return false;
     }
 
    //console.log(flag);
    this.commentsService.commentAddEmit(flag,this.socket);
     this.commentBoxInput.reset();
    }else{
       this.router.navigate(['/login']);
    }
    this.commentBoxInput.reset();
  }


  setClickedRow(index) {
    //console.log(index)
    this.selectedRow = index;
  }



}
