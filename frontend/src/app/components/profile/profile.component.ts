import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { GenjouristService } from '../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user : any;
userId:String;
journals : Object;
articles: Object;
quotations :Object;
supportersLists : any[] = [];
supportingLists : any[] = [];
supportingNumber : number;
supportersNumber : number;
profileImg:String;
supportersListsStatus:String;
supportGenjouristId : String;
profileEditStatus:boolean = false;
bioStatus:boolean = false;
profileImgStatus:boolean = false;
genderStatus:boolean = false;
editMode : boolean = false;

  constructor(
    private authService : AuthService,
    private router : Router,
    private profileService : ProfileService,
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.authService.userSubject.subscribe(
      data=> {
                this.user = data;

                this.profileService.profileJournals(this.user.genjouristId).subscribe(journals=>{
                  this.journals = journals;
                })

                this.profileService.profileArticles(this.user.genjouristId).subscribe(article=>{
                   this.articles = article;
                   console.log(article)
                });
                this.profileService.profileQuotation(this.user.genjouristId).subscribe(quotation=>{
                  this.quotations = quotation;
                });
        //=================================================================================================
        //======================================= Support Numbers =========================================
        //=================================================================================================

                this.supportersNumber = this.user.length;
                this.supportingNumber = this.user.length;
                

        //=================================================================================================
        //======================================= LIST ====================================================
        //=================================================================================================
              this.genjouristService.getSupportingList(this.user.genjouristId).subscribe(data=>{
                this.supportingLists = data;
                this.supportingNumber = data.length;
                //console.log(this.supportingLists);
              })

              this.genjouristService.getSupportersList(this.user.genjouristId).subscribe(data=>{
                this.supportersLists = data;
                this.supportersNumber = data.length;
                //console.log(this.supportersLists)
              })
          })

  }
  
  
  onSelectEditButton(){
    
    this.profileEditStatus = true;
    this.bioStatus = true;
    this.genderStatus = true;
    this.editMode = true;
    console.log("edit");

  }

  onSaveProfile(){
    this.profileEditStatus = false;
    this.bioStatus = false;
    this.editMode = false;
    this.genderStatus = false;
    console.log("save");

  }



  deleteJournal(articleId){
        if (confirm('Are you sure you want to delete this article?')) {
          this.genjouristService.deleteJournal(articleId).subscribe(data=>{
            console.log(data);
            this.profileService.profileArticles(this.user.genjouristId).subscribe(article=>{
              this.journals = article;
           });
           this.profileService.profileQuotation(this.user.genjouristId).subscribe(quotation=>{
            this.quotations = quotation;
         });
         
          });
      } else {
         console.log('cannot do anything');
      }
  }

}
