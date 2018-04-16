import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/user_auth/auth.service';
import { JournalsService } from '../../../services/journals/journals.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  status : boolean = true;
  user: any;
  journalId :String;
  journals: any[]=[];


  constructor(
    private authService: AuthService,
    private router: Router,
    private journalService: JournalsService,
  ) { }

  
  ngOnInit() {
    this.authService.userSubject.subscribe(data=>{
      this.user = data;
    });
    this.journalService.getJournal().subscribe(data=>{
      this.journals = data;
      //console.log(this.journals);
    })
  }

  receiveDataFromChild(data) {
    console.log(data);
}

}
