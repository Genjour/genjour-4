import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark-secondary',
  templateUrl: './bookmark-secondary.component.html',
  styleUrls: ['./bookmark-secondary.component.css']
})
export class BookmarkSecondaryComponent implements OnInit {

  constructor() { }
  
  @Input() journalId :String;
  @Input() userId: String;
  
  ngOnInit() {
  }

}
