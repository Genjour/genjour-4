import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService{

    source = new BehaviorSubject<any>('global');
    data$ = this.source.asObservable();
    switch(circle:String){
        this.source.next(circle)
    }

}