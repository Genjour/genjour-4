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

}
