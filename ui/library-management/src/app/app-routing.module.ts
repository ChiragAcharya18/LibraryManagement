import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookSearchAndUpdateComponent } from './book-search-and-update/book-search-and-update.component';
import { LoginComponent } from './login/login.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { RegisterComponent } from './register/register.component';
import { StudentBooksComponent } from './student-books/student-books.component';
import { StudentOrdersComponent } from './student-orders/student-orders.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TempCompComponent } from './temp-comp/temp-comp.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "add-book", component: AddBookComponent},
  {path: "view-orders", component: ViewOrderDetailsComponent},
  {path: "book-search-and-update", component: BookSearchAndUpdateComponent},
  {path: "tempcomp", component: TempCompComponent},
  {path: "studentorders", component: StudentOrdersComponent},
  {path: 'studentbooks', component: StudentBooksComponent},
  {path: "not-allowed", component: NotAllowedComponent},
  {path: "student-profile", component: StudentProfileComponent},
 {path: '**', component: NotAllowedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
