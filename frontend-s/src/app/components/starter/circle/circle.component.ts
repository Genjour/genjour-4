import { Router } from '@angular/router';
import { AuthService } from './../../../services/user_auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

}
