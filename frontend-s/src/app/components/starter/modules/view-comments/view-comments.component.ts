import { User } from './../../../../models/user.model';
import { AuthService } from './../../../../services/user_auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../../../../services/comments/comments.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

@Input() journalId : String;
user:User;
comments:any[]=[];
  constructor(
    private commentsService : CommentsService,
    private route : ActivatedRoute,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    })
    this.commentsService.getCommentsByJournalId(this.route.snapshot.params.journalId).subscribe(data=>{
      this.comments = data;
      console.log(this.comments);

    })

  }


}
