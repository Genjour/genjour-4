import { CommentService } from './../../../services/comment/comment.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../../../shared/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @ViewChild('commentBoxInput') commentBoxInput : NgForm;
  @ViewChild('replytBoxInput') replytBoxInput : NgForm;
  constructor(
    private route:ActivatedRoute,
    private authService: AuthService,
    private commentService: CommentService
  ) { }

user:user;
commentInput:String;
comments:any[]=[];
replyInput:String;
hideme=[];
replies:any[]=[]


  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    })
    
    this.commentService.getComments(this.route.snapshot.params.journalId).subscribe(data=>{
      this.comments = data;
      console.log(data);

      for(let x=0; x<data.length; x++){
        this.commentService.getReplies(data[x].commentId).subscribe(rep=>{
          if(data[x].commentId == rep.parentCommentId){
            this.replies = rep;
            console.log(rep);
          }
        })
      }

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
      this.commentService.getComments(this.route.snapshot.params.journalId).subscribe(data=>{
        this.comments = data;
      })
  }

  submitReply(commentId){
    
    const flag = {
      genjouristId    : this.user.genjouristId,
      genjourist      : this.user.name,
      journalId       : this.route.snapshot.params.journalId,
      parentCommentId : commentId,
      reply           : this.replyInput
    }

    console.log(flag);
    if(flag.reply == undefined || flag.reply == null){
      console.log("reply cannot be empty");
      return false;
    }

    this.commentService.addReply(flag).subscribe(data=>{
      if(data.success){
        console.log("successfully replied");
      }else{
        console.log("unable to reply");
      }
    })
    this.replytBoxInput.reset();

  }

  deleteComment(commentId){
    this.commentService.deleteComment(commentId).subscribe(data=>{
      if(data.success){
        console.log("deleted")
      }else{
        console.log("cannot delete")
      }
    })
    this.commentService.getComments(this.route.snapshot.params.journalId).subscribe(data=>{
      this.comments = data;
    })
  }

  deleteRply(replyId){
    this.commentService.deleteReply(replyId).subscribe(data=>{
      if(data.success){
        console.log("deleted")
      }else{
        console.log("cannot delete")
      }
    })
    this.ngOnInit();
  }

  editComment(){
    console.log("Edit")
  }

  editReply(){
    console.log("edit reply")
  }
}
