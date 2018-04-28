import { Router, ActivatedRoute } from '@angular/router';
import { CommentsService } from './../../../../services/comments/comments.service';
import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import { EndPoint } from '../../../../shared/global';

@Component({
  selector: 'app-comments-secondary',
  templateUrl: './comments-secondary.component.html',
  styleUrls: ['./comments-secondary.component.css']
})
export class CommentsSecondaryComponent implements OnInit {

  constructor(
    private commentsService : CommentsService,
    private route: ActivatedRoute
  ) { }

  commentsNumber:String;
  private socket;

  ngOnInit() {

    this.socket = io.connect(EndPoint.host);
    //this.socket.on('')
    this.commentsService.getCommentsCount(this.route.snapshot.params.journalId).subscribe(count=>{
          //console.log(count)
            if(count.status == false){
              this.commentsNumber = "0";
            }else{
              this.commentsNumber = count;
            }
    })
  }

}
