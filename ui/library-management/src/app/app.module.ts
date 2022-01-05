import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { BookSearchAndUpdateComponent } from './book-search-and-update/book-search-and-update.component';
import { TempCompComponent } from './temp-comp/temp-comp.component';
import { StudentOrdersComponent } from './student-orders/student-orders.component';
import { StudentBooksComponent } from './student-books/student-books.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { httpIntecptorProviders } from './httpIntecptorIndex';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CustomHeaderComponent,
    AddBookComponent,
    ViewOrderDetailsComponent,
    BookSearchAndUpdateComponent,
    TempCompComponent,
    StudentOrdersComponent,
    StudentBooksComponent,
    HomepageComponent,
    NotAllowedComponent,
    SpinnerComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [httpIntecptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
