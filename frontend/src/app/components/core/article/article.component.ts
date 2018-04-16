import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { JournalsService } from './../../../services/journals.service';
import { SupportService } from '../../../services/support.service';
import { ArticleService } from '../../../services/article.service';
import { GenjouristService } from '../../../services/genjourist.service';
import { user } from '../../../shared/models/user';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  user:user;
  userId:String;
  articleData: any[]=[];
  suggestedJournals: any[] = [];
  articleId: String;
  socialIconsStatus:boolean = false;
  // journaId:String = this.route.snapshot.params.journalId;

  constructor(
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private supportService: SupportService,
    private router: Router,
    private articleService: ArticleService,
    private journalsService :JournalsService
  ) { 

    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    })

  }


  ngOnInit() {


    this.articleService.article(this.route.snapshot.params.journalId).subscribe(data=>{
      this.articleData = data;
    })
    

    this.journalsService.getJournal().subscribe(data=>{
      this.suggestedJournals =  data.filter(x=>x.type == 1);
      //console.log(this.suggestedJournals)
    })

    

  }

  onClickSocialIcon(){
    console.log(status)
    this.socialIconsStatus = !this.socialIconsStatus;
  }

}
