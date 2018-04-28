import { CommentsService } from './../../../../services/comments/comments.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EndPoint } from '../../../../shared/global';
import * as io from "socket.io-client";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {

  @Input() journalId: String;
  commentsNumber: String;

  constructor(
    private commentsService: CommentsService
  ) { }

  private socket;

  ngOnInit() {
    this.socket = io.connect(EndPoint.host)
    this.commentsService.getCommentsCount(this.journalId).subscribe(count=>{
            //console.log(count)
            if(count.status == false){
              this.commentsNumber = "0";
            }else{
              this.commentsNumber = count;
            }
    });

    this.socket.on('commentCountEmit',(count)=>{
            console.log(count)
            if(count.status == false){
              this.commentsNumber = "0";
            }else{
              this.commentsNumber = count;
            }
    })

  }

  ngOnChanges(){
      

  }




}
