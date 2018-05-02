
import { Component, OnInit } from '@angular/core';
import { SupportGenjouristService } from './../../../services/support-genjourist/support-genjourist.service';
import { Journal } from './../../../models/journal.mode';
import { AuthService } from '../../../services/user_auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import * as io from "socket.io-client";
import { EndPoint } from '../../../shared/global';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  nameStatus: boolean;
  bioStatus: boolean;
  genderStatus: boolean;
  profileEditStatus: boolean;
  imgUploaderModal: boolean;
  loggedInUser: String;
  user:User;
  journals:Journal;
  articles:any[]=[];
  quotations:any[]=[];
  supportersNumber:String;
  supportingNumber:String;
  currentGenjouristRoute:String;
  currentUserData:any[]=[];
  currentUserGenjouristId:String;
  supportStatus:boolean;
  private socket;

  constructor(
    private authService : AuthService,
    private router : Router,
    private route: ActivatedRoute,
    private supportGenjouristService : SupportGenjouristService
  ) { }

  ngOnInit() {
    
    this.socket = io.connect(EndPoint.host);
    this.authService.getGenjouristByUsername(this.route.snapshot.params.username).subscribe(x => {
      this.currentUserData = x;
      this.currentUserGenjouristId = x.genjouristId

      this.getSupportersNumber(x.genjouristId);
  
      this.getSupportingNumber(x.genjouristId);
      
      this.loggedInUser = JSON.parse(localStorage.getItem('id'));
          if(this.loggedInUser == x.genjouristId){
            // console.log("own journals")
            this.getOwnJournals();
          }else{
            this.getUserJournals();
            // console.log("users journals")
          }
        
      this.supportGenjouristService.getSupportStatusOfGenjourist(this.loggedInUser,this.currentUserGenjouristId).subscribe(status=>{
        //console.log(status);
        if(status.success){
          this.supportStatus = false
        }else{
          this.supportStatus = true
        }
      })


    })

    
  
  } 

  getSupportersNumber(genjouristId){
    this.supportGenjouristService.getSupportersNumber(genjouristId).subscribe(x=>{
      this.supportersNumber = x;
    })
  }

  getSupportingNumber(genjouristId){
    this.supportGenjouristService.getSupportingNumber(genjouristId).subscribe(x=>{
      this.supportingNumber = x;
    })
  }



  getOwnJournals(){
    let x =this.route.snapshot.params.username;
    this.authService.getOwnJournals(x).subscribe(data=>{
      this.journals = data;
      console.log(this.journals)
    })
  }

  getUserJournals(){
    let x =this.route.snapshot.params.username;
    this.authService.getUserJournals(x).subscribe(data=>{
      this.journals = data;
      console.log(this.journals)
    })
  }

  supportGenjourist(){

    if(this.authService.loggedIn()){
      
      const flag = {
        userId: this.loggedInUser,
        supportId: this.currentUserGenjouristId
      }
      this.supportGenjouristService.SupportGenjourist(flag,this.socket)
  
      if(this.supportStatus == true){
        this.supportStatus = false
      }else if(this.supportStatus == false){
        this.supportStatus = true
      }
  
      this.socket.on('SupportersCountEmit', count=>{
        // console.log(count);
        this.supportersNumber = count;
      })
  
      this.socket.on('SupportingCountEmit', count=>{
        // console.log(count);
        this.supportingNumber = count;
      })

    }else{
      this.router.navigate(['/login'])
    }



  }

  onSelectEditButton(){
    
    this.profileEditStatus = true;
    this.bioStatus = true;
    this.nameStatus = true;
    console.log("edit");

  }

  cancelEditMode(){
    this.profileEditStatus = false;
    this.bioStatus = false;
    this.nameStatus = false;

  }
  
  openModal(){
    this.imgUploaderModal = true;
  }

  closeModal(){
    this.imgUploaderModal = false;
  }

  cancelImageUpload(){
    this.imgUploaderModal = false;

  }

}
