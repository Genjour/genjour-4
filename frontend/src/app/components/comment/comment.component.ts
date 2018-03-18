import { CommentService } from './../../services/comment/comment.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @ViewChild('commentBoxInput') commentBoxInput : NgForm;
 
  constructor(
    private route:ActivatedRoute,
    private authService: AuthService,
    private commentService: CommentService
  ) { }

user:user;
commentInput:String;
comments:String;
hideme=[];
replyInput:Boolean = false;

  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    })
    
    this.commentService.getComments(this.route.snapshot.params.journalId).subscribe(data=>{
      this.comments = data;
    })
  }

  submitComment(){
    // console.log("Enter")
    const flag ={

      genjouristId     : this.user.genjouristId,
      genjourist       : this.user.name,
      journalId        : this.route.snapshot.params.journalId,
      refrenceId       : "parent",
      comment          : this.commentInput,

    }
    if(flag.comment == undefined|| flag.comment == null){
      console.log("write something comment cannot be blank")
      return false;
    }
    console.log(flag);
    this.commentService.addComment(flag).subscribe(data=>{
      if(data.success){
        console.log("comment posted")
      }else{
        console.log("unable to post your comment");
      }
    })
    this.commentBoxInput.reset();
    this.ngOnInit();
  }


  toggleReply(i){
    this.replyInput[i] = !this.replyInput[i];
    
     }
  deleteComment(){
    console.log("delete");
  }

  editComment(){
    console.log("Edit")
  }
}
