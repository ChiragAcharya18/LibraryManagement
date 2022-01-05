import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { StudentService } from '../student.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-student-orders',
  templateUrl: './student-orders.component.html',
  styleUrls: ['./student-orders.component.css']
})
export class StudentOrdersComponent implements OnInit {

  orders!: any;
  orderHold!: any;
  studentId!: any;
  p: number = 1;
  parameters: any = {
    "studentId": null,
    "orderId": null,
    "bookId": null
  }
  constructor(private _s: StudentService, private _t: ToastrService, private auth: UserauthService, private _r: Router) { }

  ngOnInit(): void {
    if(this.auth.isAdmin || !this.auth.isLogin){
      this._r.navigateByUrl("not-allowed");
    }
    this.parameters.studentId = this.auth.getStdId();
    this.getOrders();
  }
  
  onFilter(a: any) {
    if(a == 'all') {
      this.orders = this.orderHold;
    } else if(a == 'ret') {
      this.orders = this.orderHold.filter((order: any) => order.returnDate !== null);
    } else if(a == 'nrt') {
      this.orders = this.orderHold.filter((order: any) => order.returnDate === null);
    }
  }

  getOrders() {
    this.parameters.studentId = this.auth.getStdId();
    this._s.getOrderDetails(this.parameters).subscribe((data: any) => {
      this.orders = data.filter((order: any) => order.returnDate === null);
      this.orderHold = data;
    }); 
  }

  returnBook(orderId: any, bookId: any, studentId: any) {
    this.parameters.bookId = bookId;
    this.parameters.studentId = studentId;
    this.parameters.orderId =orderId;

    this._s.returnOrder(this.parameters).subscribe((data: any) => {
      if(data != null || data[0].message == 'Order returned successfully') {
       this._t.success(data[0].message);
      } else {
        this._t.error("Cannot return book!");
      }
    });
    
    this.onFilter('nrt');
  }
}
