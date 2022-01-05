import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  isAdmin!: any;
  isLogin!: any;
  constructor(private auth: UserauthService, private _r: Router) {
    this.isAdmin = auth.isAdmin;
    this.isLogin = auth.isLogin;
   }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin;
    this.isLogin = this.auth.isLogin;
  }

  onSignout() {
    this.auth.logout().subscribe((data: any) => {
      if(data !== null && data.message === "You are logged out") {
        this.isAdmin = null;
        this.auth.isLogin = false;
        this.auth.storeInLocal(null, null, null,null);
        this._r.navigateByUrl("login");
      }
    })
  }

 

}
