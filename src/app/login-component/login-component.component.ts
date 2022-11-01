import { Component, OnInit } from '@angular/core';
import { authService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LogingComponent implements OnInit {

  constructor(private auth:authService, private router:Router) { }
  user= new User();

  ngOnInit(): void {
  }

  
  

  onlogin(user:User){
    this.auth.login(user).subscribe((token:string)=>{
      localStorage.setItem('authToken', JSON.stringify(token));
    })  
    this.router.navigateByUrl('')
  }

}
