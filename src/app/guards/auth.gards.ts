import { Injectable } from "@angular/core";
import { RouterStateSnapshot,ActivatedRouteSnapshot,CanActivate, Router } from "@angular/router";
import { authService } from "../services/auth.service";

@Injectable({
    providedIn:"root",
})
export class AuthGuard implements CanActivate{
    constructor(private authservice: authService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = this.authservice.getToken();
        if (token !== null) {
          return true;
        } else {
          this.router.navigateByUrl('/auth/login');
          return false;
        }
      }
    }
