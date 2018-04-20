import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import { AuthHttp } from 'angular2-jwt';
import { EndPoint } from '../../shared/global';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { Errors } from '../../shared/Error Handler/errors';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }
    authToken: any;
    user: any;
    public userSubject = new Subject<any>();

    authenticateUser(user){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(EndPoint.authenticate,user,{headers: headers})
    .map(res =>res.json());
    }


    registerUser(user){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(EndPoint.register,user,{headers: headers})
    .delay(2000)
    .map(res =>res.json())

    }

    userDataBridge(data){
        this.userSubject.next(data);
    }

    getGenjourist(){
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization',this.authToken);
        headers.append('Content-Type','Application/json');
        return this.http.get(EndPoint.profile,{headers:headers})
        .map(res=>res.json());
      }

    //Validation for uniqueness
checkEmailNotTaken(email: string) {
    return this.http
    .get(EndPoint.allUsers)
    .map(res => res.json())
    .map(users => users.filter(user => user.email.toLowerCase() === email.toLowerCase()))
    .map(users => !users.length)
    
    }

    checkUsernameNotTaken(username: string) {
    return this.http
        .get(EndPoint.allUsers)
        .map(res => res.json())
        .map(users => users.filter(user => user.username.toLowerCase() === username.toLowerCase()))
        .map(users => !users.length);
    }

    storeUserData(token,user){
        localStorage.setItem('id_token',token);
        localStorage.setItem('id',JSON.stringify(user.genjouristId));
        //localStorage.setItem('name',JSON.stringify(user));
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


      getGenjouristByUsername(username){
          return this.http.get(EndPoint.getGenjouristByUsername+username).map(res=>res.json());
      }

      getUserJournals(username){
          return this.http.get(EndPoint.getUserJournals+username).map(res=>res.json());
      }

      getOwnJournals(username){
        return this.http.get(EndPoint.getUserJournals+username).map(res=>res.json());
    }
}
