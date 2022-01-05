import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {apiUrl as api} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  //apiUrl: string = 'http://localhost:5239/api/auth/';
  apiUrl: string = api.authApiUrl;
  isAdmin!: boolean;
  isLogin!: boolean;
  constructor(private http: HttpClient) { 
    this.setVars();
  }

  login(user: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'login',user);
  }

  register(user: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'register',user);
  }
  logout(): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'logout', null);
  }

  storeInLocal(isLogin: boolean | null, isAdmin: boolean | null, studentId: number | null, parameters: any| null) {
    var data = {
      isLogin: isLogin,
      isAdmin: isAdmin,
      studentId: studentId,
      parameters: parameters
    }
    if(isAdmin === null && isLogin === null && studentId === null && parameters === null) {
      localStorage.removeItem("userDetailsForLibraryManagement");
    } else {
      localStorage.setItem("userDetailsForLibraryManagement",JSON.stringify(data));
    }
  }

  setVars() {
    var temp = localStorage.getItem("userDetailsForLibraryManagement");
    if(temp != null) {
      var temp2 = JSON.parse(temp);
      //console.log(temp2);
      this.isAdmin = temp2.isAdmin;
      this.isLogin = temp2.isLogin;
    }
  }

  getStdId() {
    var temp = localStorage.getItem("userDetailsForLibraryManagement");
    if(temp != null) {
      var temp2 = JSON.parse(temp);
      //console.log(temp2);
      
      return parseInt(temp2.studentId); 

    }
    return null;
  }
}
