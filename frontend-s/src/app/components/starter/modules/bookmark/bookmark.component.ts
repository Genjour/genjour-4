import { BookmarkService } from './../../../../services/bookmark/bookmark.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  @Input() journalId :String;
  @Input() userId: String;
  
  constructor(
    private bookmarkService: BookmarkService,
  ) { }

  ngOnInit() {
    // console.log("j "+ this.journalId);
    // console.log("u "+ this.userId)
    // this.bookmarkService.checkBookmark(journalId,currentId).subscribe(data=>{

    // })

  }

  bookmark(journalId){
    const flag ={
      journalId:journalId,
      userId:this.userId
    }
    //console.log(flag)
    this.bookmarkService.bookmark(flag).subscribe(data=>{
      if(data.success == true){
        console.log(data.msg);
        
      }else if(data.success == false){
        console.log(data.msg);
      }
    })
  }

}
