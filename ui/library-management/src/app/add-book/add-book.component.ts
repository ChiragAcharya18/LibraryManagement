import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private _a: AdminService, private _t: ToastrService, private _r: Router, private auth: UserauthService) { }

  bookId!: any;
  title!: any;
  author!: any;
  cost!: any;
  quantity!: any;

  ngOnInit(): void {
    if(!this.auth.isAdmin || !this.auth.isLogin){
      this._r.navigateByUrl("not-allowed");
    }
  }

  onAddBook() {
    //console.log(this.author);
    
    //if(this.title !== null || this.author !== null || this.cost !== null || this.quantity !== null || this.title !== undefined || this.author !== undefined || this.cost !== undefined || this.quantity !== undefined) {
        var book = {
          bookTitle: this.title,
          authorName: this.author,
          cost: parseInt(this.cost),
          availableQuantity: parseInt(this.quantity)
        }
        //console.log("Book value: " + book.authorName);
        
        this._a.addBooks(book).subscribe((data: any) => {
          if(data != null && data == "Pass") {
            this._t.success("Book added successfully");
            this.resetVariables();
          } else {
            this._t.error("Couldn't add book!");
          }
          

        })
    // } else {
    //   this._t.warning("Some fields are empty");
    // }
  }


  resetVariables() {
    this.bookId = null;
  this.title = null;
  this.author = null;
  this.cost = null;
  this.quantity = null;
 }



}
