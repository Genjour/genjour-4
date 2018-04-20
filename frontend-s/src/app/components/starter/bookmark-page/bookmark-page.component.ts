import { User } from './../../../models/user.model';
import { AuthService } from './../../../services/user_auth/auth.service';
import { BookmarkService } from './../../../services/bookmark/bookmark.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.css']
})
export class BookmarkPageComponent implements OnInit {

@Input() userId : String;
journals:String;
user:User;
  constructor(
    private bookmarkService: BookmarkService,
    private authService : AuthService
  ) { }

  ngOnInit() {

      let genjouristId = JSON.parse(localStorage.getItem('id'))
      this.bookmarkService.getBookmarkByGenjouristId(genjouristId).subscribe(data=>{
        this.journals = data;
        console.log(data)
      })


  }

}
