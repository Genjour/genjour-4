import { url } from './url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProfileService {
Url:url;
  constructor(
        private http: Http,
  ) { }

  profileArticles(genjouristId){
    //console.log(genjouristId);
      return this.http.get(url.profileArticles+genjouristId)
      .map(response=>response.json())
  }
  
  profileQuotation(genjouristId){
    return this.http.get(url.profileQuotation+genjouristId)
    .map(response=>response.json())
}

profileJournals(genjouristId){
  return this.http.get(url.profileJournals+genjouristId).map(res=>res.json());
}

  findUserAndUpdateInfo(userId,data){
    return this.http.put(url.findUserAndUpdateInfo+userId, data).map(res=>res.json());
  }

  changeProfileImage(genjouristId,data){
    return this.http.put(url.changeProfileImage+genjouristId,data).map(res=>res.json());
  }

  findUserAndUpdateProfilePic(userId,data){
    return this.http.put(url.findUserAndUpdateProfilePic+userId, data).map(res=>res.json());
  }

}
