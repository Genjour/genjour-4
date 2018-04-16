import {Component, OnInit, Input} from '@angular/core';
import {GenjouristService} from './../../../../services/genjourist.service';
import {JournalsService} from './../../../../services/journals.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  @Input() journalId: String;
  @Input() userId: String;

  bookmarkCount = String;
  bookmarkStatus: Boolean = false;

  constructor(
    private genjouristService: GenjouristService,
    private journalsService: JournalsService,
  ) {

    this.journalsService.getBookmarkCount(this.journalId).subscribe(data => {
      this.bookmarkCount = data;
      console.log(data);
    });

  }

  ngOnInit() {

    console.log(this.userId);

    this.genjouristService.checkBookmarkStatus(this.journalId, this.userId).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.bookmarkStatus = true;
      } else {
        this.bookmarkStatus = false;
      }

    });



  }


  bookmarkJournal(journalId, userId) {

    const flag = {
      genjouristId: userId,
      journalId: journalId
    };

    this.genjouristService.bookmarkJournal(flag).subscribe(data => {
      console.log(data);
      if (this.bookmarkStatus === false) {
        this.bookmarkStatus = true;
      } else {
        this.bookmarkStatus = false;
      }

    });

    this.journalsService.getBookmarkCount(this.journalId).subscribe(data => {
      this.bookmarkCount = data;
    });

  }


}

