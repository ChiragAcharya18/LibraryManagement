import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchAndUpdateComponent } from './book-search-and-update.component';

describe('BookSearchAndUpdateComponent', () => {
  let component: BookSearchAndUpdateComponent;
  let fixture: ComponentFixture<BookSearchAndUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchAndUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
