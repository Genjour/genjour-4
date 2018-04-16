import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { genjouristData } from '../../../shared/models/genjouristData';
import { LoginComponent } from './../../login/login.component';
import { GenjouristService } from '../../../services/genjourist.service';
import { AuthService } from '../../../services/auth.service';
import { SupportService } from '../../../services/support.service';
import { user } from '../../../shared/models/user';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-genjourist',
  templateUrl: './genjourist.component.html',
  styleUrls: ['./genjourist.component.css'],
  
})
export class GenjouristComponent implements OnInit {

  imgSaving: boolean = false;
 
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dzmob0mk9', uploadPreset: 'yezel8lw' })
  );

  genjouristData : genjouristData // genjourist profile which user is seeing
  journals: any[]=[];
  quotations :Object;
  user : user;
  currentUser: object;
  articleId: any;
  supportStatus : Boolean;
  supporterNumber : any;
  supportingNumber : any;
  selfSupportAlert : Boolean = true;
  supportersLists : any[] = [];
  supportingLists : any[] = [];
  supportingListsStatus: String;
  profileImg:String;
  canEditProfile:boolean = false;
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

  constructor(
    private genjouristService: GenjouristService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private supportService: SupportService,
    private router: Router,
    private profileService: ProfileService
  ) { 
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      this.cloudinaryImage = JSON.parse(response);
      return {item, response, status, headers};
    };
  }

  ngOnInit() {
    
    this.authService.userSubject.subscribe(
      user=> {
                this.user = user;

               //console.log(this.user);       
              
          

    this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(genjourist=>{

      if(genjourist.genjouristId == this.user.genjouristId){
        this.canEditProfile = true;
      }else{
        this.canEditProfile = false;
      }

      this.genjouristData = genjourist;
      console.log(this.genjouristData);

      //======================================================================================================
      //========================================== Support Status ============================================
      
        this.genjouristService.checkSupportStatus(this.user.genjouristId,this.route.snapshot.params.id).subscribe(status=>{
          if(status.success){
            this.supportStatus = true;
          }else{
            this.supportStatus = false;
          }
        })

      //======================================================================================================

      if(this.supporterNumber == null){
        this.supporterNumber = 0;
      }

      if(this.supportingNumber == null){
        this.supportingNumber = 0;
      }
      
    })

    this.genjouristService.getGenjouristJournals(this.route.snapshot.params.id).subscribe(journal=>{
      this.journals = journal;
      //console.log(journal)
    })

    // this.genjouristService.articles(this.route.snapshot.params.id).subscribe(article=>{
    // this.journals = article.filter( x=> x.status == true );
    // })

    // this.genjouristService.quotation(this.route.snapshot.params.id).subscribe(quotation=>{
    //   this.quotations = quotation.filter( x=> x.status == true);
    // })

  });

      //=================================================================================================
      //======================================= LIST ====================================================
      //=================================================================================================
      this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(data=>{
        this.supportingLists = data;
        this.supportingNumber = data.length;
        //console.log(this.supportingLists);
      })

      this.genjouristService.getSupportersList(this.route.snapshot.params.id).subscribe(data=>{
        this.supportersLists = data;
        this.supporterNumber = data.length;
        //console.log(this.supportersLists)
      })

  }


  support(userId, genjouristId){
    if(this.authService.loggedIn()){

      if(userId == genjouristId){
        //console.log('You cannot like your own profile');
        this.selfSupportAlert = false;
        return this.selfSupportAlert;
      }

       // ========================================= Support Status ===========================================

      if(this.supportStatus === true){
        this.supportStatus = false;
      }else if (this.supportStatus === false){
        this.supportStatus = true;
      }

      //============================================ Support Code ============================================

      this.supportService.supportGenjourist(userId, genjouristId).subscribe(data=>{
        //console.log(data.msg);
        this.genjouristService.getSupportersList(this.route.snapshot.params.id).subscribe(data=>{
          this.supporterNumber = data.length;
        })
      });

    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }

  
}


refreshUser(){
  this.ngOnInit();
  this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(data=>{
    this.supportingLists = data;
    //console.log(this.supportingLists);
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
