import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class PostService {
  authToken : any;
  user : any;

  constructor(
    private http:Http,
    private authService : AuthService
  ) { }

  PostImage(formData){
    return this.http.post('/articleImage', formData)
    .map((res:any)=> res);
  }

  postQuotation(quotation){
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','Application/json');
    return this.http.post('/quotation',{headers:headers})
    .map(res=>res.json());
  }



}
