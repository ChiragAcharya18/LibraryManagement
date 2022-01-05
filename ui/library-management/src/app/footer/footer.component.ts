import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _s: StudentService) { }
  quote!: any;
  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this._s.getQuotes().subscribe((data: any) => {
      if(data !== null) {
        //console.log(data);
        this.quote = data.content;
      }
    })
  }

}
