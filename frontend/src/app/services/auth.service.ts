import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { url } from './url';

@Injectable()
export class AuthService {
  Url:url;
  authToken : any;
  user : any;

  public userSubject = new Subject<any>();

  constructor(
    private http:Http, 
  ) { }

  userDataBridge(data){
    this.userSubject.next(data);
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','Application/json');
    return this.http.post(url.register,user,{headers:headers})
    .map(res=>res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','Application/json');
    return this.http.post(url.authenticate,user,{headers:headers})
    .map(res=>res.json());
  }

    postQuotation(user){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','Application/json');
    return this.http.post(url.postQuotation,user,{headers:headers})
    .map(res=>res.json());
  }

    postArticle(user){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','Application/json');
    return this.http.post(url.postArticle,user,{headers:headers})
    .map(res=>res.json());
  }

  saveArticle(user){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','Application/json');
    return this.http.post(url.saveArticle,user,{headers:headers})
    .map(res=>res.json());
  }

  getGenjourist(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','Application/json');
    return this.http.get(url.profile,{headers:headers})
    .map(res=>res.json());
  }


  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('userinfo',JSON.stringify(user));
    this.authToken  = token;
    this.user = user;
  }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
  }


}
