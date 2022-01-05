import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-book-search-and-update',
  templateUrl: './book-search-and-update.component.html',
  styleUrls: ['./book-search-and-update.component.css']
})
export class BookSearchAndUpdateComponent implements OnInit {

  allBooks!: any;
  allBooksHold!: any;
  searchText!: any;
  book = {
    bookId: 0,
    bookTitle: '',
    authorName: '',
    cost: 0,
    availableQuantity: 0
  };
  constructor(private _a: AdminService, private _t: ToastrService, private auth: UserauthService, private _r: Router) {
    this.getBooks();
   }
  
  ngOnInit(): void {
    if(!this.auth.isAdmin || !this.auth.isLogin){
      this._r.navigateByUrl("not-allowed");
    }
    this.getBooks();
  }

  getBooks() {
    this._a.getBooks().subscribe((data: any) => {
      if(data != null) {
        //console.log((data));
        this.allBooks = data;
        this.allBooksHold =data;
      }
    });
  }

  searchBook() {
    if(this.searchText !== null) {
      this.allBooksHold == this.allBooks;
      this.allBooks = this.allBooks.filter((book: any) => {
        return book.bookTitle.toString().toLowerCase().includes(
          this.searchText.toString().trim().toLowerCase()
        );
      });
    } 
    if(this.allBooks.length == 0) {
      this.allBooks = this.allBooksHold;
    }
  }

  resetSearch() {
    this.searchText = null;
    this.getBooks();
  }

  setBook(val: number) {
    //console.log("Book Id: " + val);
    this.getBooks();
    this.book = this.allBooks.find((bk: any) => bk.bookId == val);
    //console.log(this.book);
  }

  updateBook() {
    if(this.book.bookId !== 0) {
      //console.log(this.book);
      this._a.updateBooks(this.book).subscribe((data: any) => {
        //console.log(data);
        if(data != null && data == "Pass") {
          this._t.success("Book Updated successfully");
          this.resetBook();
        } else {
          this._t.error("Couldn't update book!");
        }
      })
    }
  }


  resetBook() {
    this.book = {
      bookId: 0,
      bookTitle: '',
      authorName: '',
      cost: 0,
      availableQuantity: 0
    };
  }
}
