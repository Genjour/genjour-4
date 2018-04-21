import { Router } from '@angular/router';
import { AuthService } from './../../../../services/user_auth/auth.service';
import { BookmarkService } from './../../../../services/bookmark/bookmark.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit, OnChanges {

  @Input() journalId :String;
  @Input() userId: String;

  bookmarkStatus: boolean;
  
  constructor(
    private bookmarkService: BookmarkService,
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    console.log(this.journalId)
  }

  ngOnChanges(){
    let currentId = JSON.parse(localStorage.getItem('id'))
    this.bookmarkService.checkBookmark(this.journalId,currentId).subscribe(data=>{
      if(data.success == true){
        this.bookmarkStatus = true
      }else{
        this.bookmarkStatus = false
      }
    })
  }

  bookmark(journalId){

    let currentId = JSON.parse(localStorage.getItem('id'));
    const flag ={
      journalId:journalId,
      userId:currentId
    }

    //console.log(flag)

    if(this.authService.loggedIn()){
      this.bookmarkService.bookmark(flag).subscribe(data=>{
        if(data.success == true){
          console.log(data.msg);  
        }else if(data.success == false){
          console.log(data.msg);
        }

        if(this.bookmarkStatus == true){
          this.bookmarkStatus = false;
        }else if(this.bookmarkStatus == false){
          this.bookmarkStatus = true;
        }

      })
    }else{
      this.router.navigate(['/login'])
    }


  }

}
