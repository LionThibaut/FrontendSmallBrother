import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitor_loginComponent } from './visitor_login.component';

describe('LoginComponent', () => {
  let component: Visitor_loginComponent;
  let fixture: ComponentFixture<Visitor_loginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visitor_loginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visitor_loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
