import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/shared/dataService.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
action:String = "global";
  constructor(
    private dataService : DataService,
    private titleService:Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Genjour')
    this.dataService.data$.subscribe(data=>{
      this.action = data;
    })
  }

}
