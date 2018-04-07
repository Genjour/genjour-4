import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-replicate',
  templateUrl: './replicate.component.html',
  styleUrls: ['./replicate.component.css']
})
export class ReplicateComponent implements OnInit {

  @Output() toggleSocialIcons: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onSelectSocialIcons():void{
    console.log("trigger 1")
    this.toggleSocialIcons.emit();

} 

}
