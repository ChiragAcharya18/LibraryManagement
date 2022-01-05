import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {apiUrl as api} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //apiUrl = 'http://localhost:5239/api/Admin/';
  //apiurl2 = 'http://localhost:5239/api/Admin/Addbooks';
  apiUrl: string = api.adminApiUrl;
  constructor(private http: HttpClient) { }

  addBooks(book: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'Addbooks', book);
  }

  viewOrderDetails(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'vieworders');
  }

  updateBooks(book: any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl + 'Updatebooks', book);
  }

  getBooks(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + 'getbooks');
  }
}
