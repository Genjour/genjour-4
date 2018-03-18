import { GenjouristService } from './../../../../services/genjourist.service';
import { user } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { SupportService } from '../../../../services/support.service';
import { AuthService } from '../../../../services/auth.service';


@Component({
  selector: 'app-support-btn',
  templateUrl: './support-btn.component.html',
  styleUrls: ['./support-btn.component.css'],
  
})


export class SupportBtnComponent implements OnInit {

  @Input() supportGenjouristId; 
  @Input() userId;

  supportStatus: Boolean;
  user:user;
  supporting:any[]=[];
  
  constructor(
    private authService : AuthService,
    private router: Router,
    private supportService: SupportService,
    private genjouristService: GenjouristService,

  ) { }

  ngOnInit( ) {

    

  }

  ngAfterViewInit(){
    this.authService.userSubject.subscribe(data=>{
      console.log(this.userId+" "+this.supportGenjouristId);


      //======================================================================================================
      //========================================== Support Status ============================================

      this.genjouristService.checkSupportStatus(this.userId,this.supportGenjouristId).subscribe(status=>{
        if(status.success){
          this.supportStatus = true;
          console.log(this.supportStatus);
        }else{
          this.supportStatus = false;
          console.log(this.supportStatus);
        }
      })
    //======================================================================================================

    });

    

  }

  supportGen(userId,supportGenjouristId){
    //console.log("userId "+userId+" genjouristId "+supportGenjouristId);

    if(this.authService.loggedIn()){

      console.log(this.userId+" "+this.supportGenjouristId);
       // ========================================= Support Status ===========================================

      if(this.supportStatus === true){
        this.supportStatus = false;
      }else if (this.supportStatus === false){
        this.supportStatus = true;
      }

      //============================================ Support Code ============================================

      this.supportService.supportGenjourist(userId, supportGenjouristId).subscribe(data=>{
        // this.supporterNumber = data.msg;
           console.log(data.msg);

      });

    }
    else{
        this.router.navigate(['/login']);
        console.log('first logged in then support us');
    }

  }

}
