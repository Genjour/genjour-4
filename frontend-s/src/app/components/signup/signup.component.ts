import { AuthService } from '../../services/user_auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidateUsernameNotTaken } from './validators/username.validators';
import { ValidateEmailNotTaken } from './validators/email.validators';
import { ValidatePassword } from './validators/password.validators';
import { Title } from '@angular/platform-browser';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public loading:boolean = false;
  error: boolean;
  signin: boolean;
  genders = ['Male','Female','Others'];
  form;
  constructor(
    fb:FormBuilder,
    private router:Router,
    private authService: AuthService,
    private titleService:Title
  ) {

    this.form = fb.group({
      fullname:['',[
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]],
      username:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[a-zA-Z0-9_-]{5,12}$")],
        ValidateUsernameNotTaken.createValidator(this.authService)
    ],
      email:['',[
        Validators.required,
        Validators.email],
        ValidateEmailNotTaken.createValidator(this.authService)
      ],
      password:['',[
        Validators.required,
        ValidatePassword.passwordValidator
      ]],
      gender:['', [
        Validators.required
      ]],
      dob:['',[
        Validators.required
      ]],
      tAndC:['',[
        Validators.required
      ]]

    })

   }



  ngOnInit() {
    this.titleService.setTitle('Sign Up -Genjour');
  }
 
  onSubmit(){
    let user:User= this.form.value
    console.log(this.form);
    this.authService.registerUser(user).subscribe(data =>{
      this.loading=false
      if(data.success){
      this.form.reset()
      //this.signin=true;

      this.loading=true
      setTimeout(() => {  
        this.loading=false
      this.router.navigate(['/login'])
      }, 3000);
      }
     else{
      this.error=true;
      this.loading=true
      setTimeout(() => {  
        this.loading=false
        this.router.navigate(['/signup'])

        }, 3000);
     }
   });
  }

  get fullname(){
    return this.form.get('fullname')
  }
  get email(){
    return this.form.get('email')
  }
  get username(){
    return this.form.get('username')
  }
  get password(){
    return this.form.get('password')
  }
  get gender(){
    return this.form.get('gender')
  }
  get dob(){
    return this.form.get('dob')
  }
  get tAndC(){
    return this.form.get('tAndC')
  }

}
