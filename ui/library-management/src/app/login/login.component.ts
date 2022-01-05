import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { EventEmitter } from '';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: any;
  password!: any;


  data = {
    isLogin: null,
    isAdmin: null,
    studentId: ''
  }
  constructor(private auth: UserauthService, private _r: Router, private toast: ToastrService) { 
    
  }

  ngOnInit(): void {
    if(this.auth.isLogin && this.auth.isAdmin) {
      this._r.navigateByUrl("add-book");
    } else if(this.auth.isLogin && !this.auth.isAdmin) {
      this._r.navigateByUrl("student-profile");
    } else {
      this._r.navigateByUrl("login");
    }
  }

  onLogin() {
    var cred = {
      username: this.username,
      password: this.password
    }
    //console.log(this.username + this.password + cred);
    
    this.auth.login(cred).subscribe((data: any) => {
      //console.log(data);
       
      if(data !== null && data.message === "You are logged in") {
        this.toast.success("Login Success" + data.message);
        if(this.username.toLowerCase() === 'admin'){
          this.auth.isAdmin = true;
          this.auth.isLogin = true;
          this.auth.storeInLocal(true, true, data.studentId,null);

          this._r.navigateByUrl("add-book");
         

        } else {
          this.auth.isAdmin= false;
          this.auth.isLogin = true;
          this.auth.storeInLocal(true, false, data.studentId,null);
          this._r.navigateByUrl("studentbooks");
        }
      } else {
        this.auth.isLogin = false;
        this.toast.error("Login failed!" + data.message);
      }
    });
  }



}
