import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { EndPoint } from '../../shared/global';

@Injectable()
export class SupportGenjouristService {

  constructor(private http:Http) { }

  getSupportersNumber(genjouristId){
    return this.http.get(EndPoint.getSupportersNumber+genjouristId).map(res=>res.json())
  }

  getSupportingNumber(genjouristId){
    return this.http.get(EndPoint.getSupportingNumber+genjouristId).map(res=>res.json())
  }

  SupportGenjourist(data){
    return this.http.post(EndPoint.SupportGenjourist,data).map(res=>res.json())
  }

  getSupportStatusOfGenjourist(userId,supportId){
    return this.http.get(EndPoint.getSupportStatusOfGenjourist+userId+'/'+supportId).map(res=>res.json())
  }
}
