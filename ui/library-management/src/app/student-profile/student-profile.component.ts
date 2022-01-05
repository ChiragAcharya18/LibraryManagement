import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  stdId :any;
  studentDetails: any;
  constructor(private _s: StudentService, private auth: UserauthService, private _r: Router) { }

  ngOnInit(): void {
    if(this.auth.isAdmin || !this.auth.isLogin){
      this._r.navigateByUrl("not-allowed");
    }
    this.getStudentDetails();
  }

  getStudentDetails() {
     this.stdId = this.auth.getStdId();
      this._s.getStudentProfile(parseInt(this.stdId)).subscribe((data: any) => {
          if(data!== null) {
            console.log(data);
            this.studentDetails = data;
        }
      })
  }

}
