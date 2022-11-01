import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthInterceptor } from "../intercepteurs/auth.intercepteur";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
export class authService {
    constructor(private http: HttpClient){}
    
    register(user:User): Observable<any>{
        return this.http.post<any>('http://localhost:3000/auth/register',user)

    }

    login(user:User): Observable<string>{
        return this.http.post<any>('http://localhost:3000/auth/login',user)

    }

    getToken() {
       return localStorage.getItem('authToken')
        
          
        
    }
}