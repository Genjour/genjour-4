import { url } from './../url';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CommentService {

  constructor(
    private http:Http
  ) { }

addComment(commentData){
  return this.http.post(url.addComment,commentData).map(res=>res.json());
}

getComments(journalId){
  return this.http.get(url.getComments+journalId).map(res=>res.json());
}

getReplies(parentCommentId){
  return this.http.get(url.getReplies+parentCommentId).map(res=>res.json());
}

addReply(replyData){
  return this.http.post(url.addReply,replyData).map(res=>res.json())
}

deleteComment(commentId){
  return this.http.delete(url.deleteComment+commentId).map(res=>res.json())
}

deleteReply(replyId){
  return this.http.delete(url.deleteReply+replyId).map(res=>res.json())
}

}
