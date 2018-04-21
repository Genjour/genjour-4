import { JournalsService } from './../../../services/journals/journals.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private journalsService : JournalsService

  ) { }

journals: any[]=[]

  ngOnInit() {

    this.journalsService.getJournalsByCategory(this.route.snapshot.params.category).subscribe(data=>{
      this.journals = data;
      console.log(data)
    })

  }

}
