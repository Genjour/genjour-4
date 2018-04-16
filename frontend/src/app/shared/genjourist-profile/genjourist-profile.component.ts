import { Component, OnInit, EventEmitter } from '@angular/core';
import { user } from './../models/user';
import { AuthService } from '../../services/auth.service';
import { GenjouristService } from '../../services/genjourist.service';



@Component({
  selector: 'app-genjourist-profile',
  template:'./genjourist-profile.component.html',
  outputs: ['userProfile','loadingEvent'],
  inputs: ['isUser','userId']
})
export class GenjouristProfileComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private genjouristService: GenjouristService
  ) { }
  
  private userProfile = new EventEmitter();
  userId:string
  isUser:boolean=false
  user:user[]=[];

  ngOnInit() {
    if(this.isUser){
      this.authService.getGenjourist().subscribe(data=>{
        this.user=data.user;
        this.userProfile.emit(this.user)
      })
    }
  else{
      this.genjouristService.genjouristProfile(this.userId).subscribe(data=>{
      this.user=data.user;
      this.userProfile.emit(this.user)
    })
  }
  }



}
