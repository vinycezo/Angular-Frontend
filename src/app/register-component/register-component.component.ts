import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { authService } from '../services/auth.service';
@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  constructor(private auth:authService, private router: Router) { }
  user= new User();
  ngOnInit(): void {
  }

  onRegister(user:User) {
    this.auth.register(user).subscribe();
    this.router.navigateByUrl('/auth/login')
  }
}
