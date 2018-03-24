import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-journal',
  templateUrl: './support-journal.component.html',
  styleUrls: ['./support-journal.component.css']
})
export class SupportJournalComponent implements OnInit {

  constructor() { }
  supportStatus: boolean = false;
  ngOnInit() {
  }

}
