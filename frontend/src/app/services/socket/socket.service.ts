import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  private url = '';  
  private socket;

  constructor() {
    //this.socket = io(this.url);
   }
  }
