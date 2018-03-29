import { user } from './../models/user';
import { JournalsService } from './../../services/journals.service';
import { Component, OnInit } from '@angular/core';
import { GenjouristService } from '../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SupportService } from '../../services/support.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  user:user;
  articleData: any[]=[];
  suggestedJournals: any[] = [];
  articleId: String;
  userId: String;
  journalId:String;

  constructor(
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private supportService: SupportService,
    private router: Router,
    private articleService: ArticleService,
    private journalsService :JournalsService
  ) { }

  //articleId:any = this.route.snapshot.params.articleId;

  ngOnInit() {

    this.authService.userSubject.subscribe(data=>{
      this.user =data;
    })

    this.articleService.article(this.route.snapshot.params.journalId).subscribe(data=>{
      this.articleData = data;
      console.log(this.articleData);
    })

    this.journalsService.getJournal().subscribe(data=>{
      this.suggestedJournals =  data.filter(x=>x.type == 1);
      console.log(this.suggestedJournals)
    })

  }

}
