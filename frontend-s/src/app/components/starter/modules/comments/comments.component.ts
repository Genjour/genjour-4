import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Output() emitter: EventEmitter<any[]> = new EventEmitter();
  dataToEmit : any = "hello"; 

  constructor() { }

  ngOnInit() {
  }


  passDataToParent(){
    this.emitter.emit(this.dataToEmit);
  }


}
