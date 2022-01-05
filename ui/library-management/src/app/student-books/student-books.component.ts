import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-student-books',
  templateUrl: './student-books.component.html',
  styleUrls: ['./student-books.component.css']
})
export class StudentBooksComponent implements OnInit {

  bookList!: any;
  searchText!:any;
  bookListHold!: any;
  parameters:any = {
    "studentId": null,
    "orderId": null,
    "bookId": null
  }
  constructor(private _s: StudentService, private _t: ToastrService, private auth: UserauthService, private _r: Router) { }

  ngOnInit(): void {
    if(this.auth.isAdmin || !this.auth.isLogin){
      this._r.navigateByUrl("not-allowed");
    }
    this.getBookList();
    this.parameters.studentId = this.auth.getStdId();
  }

  getBookList() {
    this.parameters.studentId = this.auth.getStdId();
    console.log("Get BookList parameters: " + this.parameters.studentId);
    this._s.getBookList(this.parameters).subscribe((data: any) => {
      if(data !== null) {
        this.bookList = data;
      }
    })
  }

  placeOrder(bookId: any) {
    this.parameters.studentId = this.auth.getStdId();
    this.parameters.bookId = bookId;
    this._s.placeOrder(this.parameters).subscribe((data: any) => {
      if(data !== null && data[0].message == 'Order Placed successfully') {
        this._t.success(data[0].message);
        this.getBookList();
      } else {
        this._t.error("Couldn't place order");
      }
    })
  }

  addToCart() {
    alert("Work in progress!");
  }

  searchBook() {
    if(this.searchText !== null) {
      this.bookListHold == this.bookList;
      this.bookList = this.bookList.filter((book: any) => {
        return book.bookTitle.toString().toLowerCase().includes(
          this.searchText.toString().trim().toLowerCase()
        );
      });
    } 
    if(this.bookList.length == 0) {
      this.bookList = this.bookListHold;
    }
  }

  resetSearch() {
    this.searchText = null;
    this.getBookList();
  }

}
