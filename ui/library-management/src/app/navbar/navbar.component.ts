import { Component, OnInit } from '@angular/core';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin!: boolean;
  isLogin!: boolean;
  constructor(private auth: UserauthService) { 
    this.isAdmin = auth.isAdmin;
    this.isLogin = auth.isLogin;
  }

  ngOnInit(): void {
  }

}
