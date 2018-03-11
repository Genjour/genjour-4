import { url } from './url';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';


@Injectable()
export class PostService {
  Url:url;
  authToken : any;
  user : any;

  constructor(
    private http:Http,
    private authService : AuthService
  ) { }


}
