import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails: any = {
    Name: null,
    userName: null,
    password: null,
    email: null
  }
  constructor(private auth: UserauthService, private _t:ToastrService, private _r: Router) { }

  ngOnInit(): void {
    if(this.auth.isLogin) {
      this._r.navigateByUrl("not-allowed");
    }
  }

  onRegister() {
    if(this.userDetails.Name != null || this.userDetails.userName != null || this.userDetails.password != null || this.userDetails.email != null) {
      this.auth.register(this.userDetails).subscribe((data: any) => {
        if(data != null && data.message == "Pass") {
            this._t.success("User registered successfully");
            this.resetUser();
        } else {
          this._t.error(data.message);
        }
      });
    } else {
      this._t.warning("Few fields are left empty");
    }

  }


 resetUser() {
  this.userDetails = {
    Name: '',
    userName: '',
    password: '',
    email: ''
  }
 }

}
