import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {

  constructor(private _a: AdminService, private _r: Router, private auth: UserauthService) { }
  orders!: any;
  orderHold!: any;

  p: number = 1;
  totalItems!: any;

  ngOnInit(): void {
    if(!this.auth.isAdmin){
      this._r.navigateByUrl("not-allowed");
    }
    this.onRefreshOrderDetails();
  }

  onRefreshOrderDetails() {
    this._a.viewOrderDetails().subscribe((data: any) => {
      if(data !== null) {
        this.orders = data.filter((order: any) => order.returnDate == null);
        this.totalItems = this.orders.length;
        this.orderHold = data;
        //console.log(this.orders);
      }
    })
  }

  onFilter(a: any) {
      if(a == 'all') {
        this.orders = this.orderHold;
      } else if(a == 'ret') {
        this.orders = this.orderHold.filter((order: any) => order.returnDate != null);
      } else if(a == 'nrt') {
        this.orders = this.orderHold.filter((order: any) => order.returnDate == null);
      }
      this.totalItems = this.orders.length;
  }
}
