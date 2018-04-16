import { JournalsService } from './../../../services/journals/journals.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.css']
})
export class ViewJournalComponent implements OnInit {

  constructor(
    private journalsService: JournalsService,
    private route: ActivatedRoute
  ) { }
  socialIconsStatus:boolean = false;
  journal: any[]=[]

  ngOnInit() {
    this.journalsService.getJournalById(this.route.snapshot.params.journalId).subscribe(data=>{
      this.journal = data;
    })
  }

  onClickSocialIcon(){
    console.log(status)
    this.socialIconsStatus = !this.socialIconsStatus;
  }
}
