import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-front-panel',
  templateUrl: './front-panel.component.html',
  styleUrls: ['./front-panel.component.css']
})
export class FrontPanelComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

@Input() journalId :String;
@Input() userId : String;

  ngOnInit() {
  }
  
  sanitize(url){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


}
