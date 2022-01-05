import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {apiUrl as api} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //apiUrl = 'http://localhost:5239/api/student/';
  apiUrl: string = api.studentApiUrl;
  constructor(private http: HttpClient) { }

  getBookList(data: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'GetBookList', data);
  }

  getStudentProfile(stdid: any): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'GetStudentProfile?id='+ stdid);
  }

  getOrderDetails(data: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'GetOrderDetails', data);
  }

  placeOrder(data: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'PlaceOrder', data);
  }

  returnOrder(data: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'ReturnBook', data);
  }

  getQuotes(): Observable<any[]> {
    return this.http.get<any>("https://api.quotable.io/random");
  }
}
