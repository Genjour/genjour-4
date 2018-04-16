import { draftJournal } from '../../../../../shared/models/draftArticles';
import { GenjouristService } from '../../../../../services/genjourist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-quotation',
  templateUrl: './edit-quotation.component.html',
  styleUrls: ['./edit-quotation.component.css']
})
export class EditQuotationComponent implements OnInit {

  constructor(private genjouristService: GenjouristService, private route: ActivatedRoute, private router:Router) { }
  draftData= new draftJournal();

  ngOnInit() {
    this.genjouristService.getDraftJournal(this.route.snapshot.params.quotationId).subscribe(data=>{
      console.log(data);
      this.draftData = data;

  })


  }

  draft(journalId){
    const article = {
      tags     : this.draftData.tags,
      category : this.draftData.category,
      content  : this.draftData.content,
      status   : false,

    }
    this.genjouristService.updateJournal(journalId,article).subscribe(data=>{
      if(data.success){
        console.log('Yeah updated');
        this.router.navigate(['/genjourist']);
      }else{
        console.log('cant update');
      }
    })
  }

  quotationSave(journalId){
    const quotation = {
      tags     : this.draftData.tags,
      category : this.draftData.category,
      content  : this.draftData.content,
      status   : true,
    }

    this.genjouristService.updateJournal(journalId,quotation).subscribe(data=>{
      if(data.success){
        console.log('Yeah updated');
        this.router.navigate(['/genjourist']);
      }else{
        console.log('cant update');
      }
    })
  }

}
