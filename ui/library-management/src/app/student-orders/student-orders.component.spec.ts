import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrdersComponent } from './student-orders.component';

describe('StudentOrdersComponent', () => {
  let component: StudentOrdersComponent;
  let fixture: ComponentFixture<StudentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
