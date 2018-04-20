import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/user_auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-write-comments',
  templateUrl: './write-comments.component.html',
  styleUrls: ['./write-comments.component.css']
})
export class WriteCommentsComponent implements OnInit {
  
  @ViewChild('commentBoxInput') commentBoxInput : NgForm;
  @ViewChild('replytBoxInput') replytBoxInput : NgForm;
  constructor(
    private route:ActivatedRoute,
    private authService: AuthService,
    //private commentService: CommentService
  ) { }

user:User;
commentInput:String;
comments:any[]=[];
replyInput:String;
hideme=[];
replies:any[]=[]


  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
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

  }





  editComment(){
    console.log("Edit")
  }

  editReply(){
    console.log("edit reply")
  }

}
