import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';
import { GenjouristService } from '../../../services/genjourist.service';
import { ActivatedRoute } from '@angular/router';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit , OnDestroy {

user : any;
userId:String;
journals : Object;
articles: Object;
quotations :Object;
supportersLists : any[] = [];
supportingLists : any[] = [];
supportingNumber : number;
supportersNumber : number;
profileImg:String;
supportersListsStatus:String;
supportGenjouristId : String;
profileEditStatus:boolean = false;
bioStatus:boolean = false;
profileImgStatus:boolean = false;
genderStatus:boolean = false;
nameStatus:boolean = false;
editMode : boolean = false;
imageChangedEvent: any = '';
croppedImage: any = '';
imgUploaderModal : boolean = false;

bio:String;
gender:String;
name:String;

cloudinaryImage: any;

imgSaving: boolean = false;
 
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dzmob0mk9', uploadPreset: 'yezel8lw' })
  );

  constructor(
    private authService : AuthService,
    private router : Router,
    private profileService : ProfileService,
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
  ) { 
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.cloudinaryImage = JSON.parse(response);
      return {item, response, status, headers};
    };
  }

  ngOnInit() {

    this.authService.userSubject.subscribe(
      data=> {
                this.user = data;

                this.profileService.profileJournals(this.user.genjouristId).subscribe(journals=>{
                  this.journals = journals;
                })

                this.profileService.profileArticles(this.user.genjouristId).subscribe(article=>{
                   this.articles = article;
                   console.log(article)
                });
                this.profileService.profileQuotation(this.user.genjouristId).subscribe(quotation=>{
                  this.quotations = quotation;
                });
        //=================================================================================================
        //======================================= Support Numbers =========================================
        //=================================================================================================

                this.supportersNumber = this.user.length;
                this.supportingNumber = this.user.length;
                

        //=================================================================================================
        //======================================= LIST ====================================================
        //=================================================================================================
              this.genjouristService.getSupportingList(this.user.genjouristId).subscribe(data=>{
                this.supportingLists = data;
                this.supportingNumber = data.length;
                //console.log(this.supportingLists);
              })

              this.genjouristService.getSupportersList(this.user.genjouristId).subscribe(data=>{
                this.supportersLists = data;
                this.supportersNumber = data.length;
                //console.log(this.supportersLists)
              })
          })

  }
  
  
  onSelectEditButton(){
    
    this.profileEditStatus = true;
    this.bioStatus = true;
    this.genderStatus = true;
    this.editMode = true;
    this.nameStatus = true;
    console.log("edit");

  }

  onSaveProfile(){
    this.profileEditStatus = false;
    this.bioStatus = false;
    this.nameStatus = false;
    this.genderStatus = false;
    
    const data = {
      bio : this.bio,
      gender : this.gender,
      name:this.name
    }
    console.log(data)
    // this.profileService.findUserAndUpdateInfo(this.user.genjouristId,data).subscribe(data=>{
    //   if(data.success){
    //     console.log("update")
    //   }else{
    //     console.log("cannot update")
    //   }
    // })
    this.editMode = false;

  }

removeProfilePic(userId){

  if(this.user.gender === "male"){
    const data = {
      profileImg : "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520725961/defaultBoy.png",
    }
    console.log(data)
    this.profileService.findUserAndUpdateProfilePic(userId, data).subscribe(status=>{
      if(status.success){
        console.log("remove profile pic")
      }else{
        console.log("cannot remove");
      }
    })
  }else{
    const data = {
      profileImg : "https://res.cloudinary.com/dzmob0mk9/image/upload/v1520725961/defaultGirl.png",
    }
    console.log(data)
    this.profileService.findUserAndUpdateProfilePic(userId, data).subscribe(status=>{
      if(status.success){
        console.log("remove profile pic")
      }else{
        console.log("cannot remove");
      }
    })
  }



}

  deleteJournal(articleId){
        if (confirm('Are you sure you want to delete this article?')) {
          this.genjouristService.deleteJournal(articleId).subscribe(data=>{
            console.log(data);
            this.profileService.profileArticles(this.user.genjouristId).subscribe(article=>{
              this.journals = article;
           });
           this.profileService.profileQuotation(this.user.genjouristId).subscribe(quotation=>{
            this.quotations = quotation;
         });
         
          });
      } else {
         console.log('cannot do anything');
      }
  }

  openModal(){
    this.imgUploaderModal = true;
  }




  cancelImageUpload(){
    this.imgUploaderModal = false;

  }



  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
      this.croppedImage = image;
  }
  imageLoaded() {

  }
  loadImageFailed() {
    // show message
  }

  closeModal(){
    this.imgUploaderModal = false;
  }


  upload(){

    
    this.imgSaving = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
    let res: any = JSON.parse(response);
    console.log(res);
    const data = {
      profileImg: res.url
    }
    this.profileService.changeProfileImage(this.user.genjouristId,data).subscribe(data=>{
      console.log(data);
    })
    }
    setTimeout(() => {
      this.cancelImageUpload();
    }, 2000);

    this.ngOnInit();

  }

  ngOnDestroy(){

  }


}
