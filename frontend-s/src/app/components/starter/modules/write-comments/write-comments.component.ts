import { CommentsService } from './../../../../services/comments/comments.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/user_auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../../models/user.model';
import * as io from "socket.io-client";
import { EndPoint } from '../../../../shared/global';

@Component({
  selector: 'app-write-comments',
  templateUrl: './write-comments.component.html',
  styleUrls: ['./write-comments.component.css']
})
export class WriteCommentsComponent implements OnInit {
  
  @ViewChild('commentBoxInput') commentBoxInput: NgForm;
  @ViewChild('replytBoxInput') replytBoxInput: NgForm;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private commentsService: CommentsService,
    private router: Router

  ) {}

  user: User;
  commentInput: String;
  comments: any[] = [];
  replyInput: String;
  private socket;


  ngOnInit() {
    this.authService.userSubject.subscribe(data => {
      this.user = data;
    })
    this.socket = io.connect(EndPoint.host);
  }


  submitComment() {
   let currentId=JSON.parse(localStorage.getItem('id'))

   if(this.authService.loggedIn()){
    const flag = {
      genjouristId: currentId,
      journalId:    this.route.snapshot.params.journalId,
      refrenceId:   "parent",
      comment:      this.commentInput,

    }

    if (flag.comment == undefined || flag.comment == null) {
      console.log("write something comment cannot be blank")
      return false;
    }

    //console.log(flag);
    this.commentsService.commentAddEmit(flag,this.socket);
   }else{
      this.router.navigate(['/login']);
   }



  }




}
