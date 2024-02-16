import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitor_register } from './visitor_register.component';

describe('RegisterComponent', () => {
  let component: Visitor_register;
  let fixture: ComponentFixture<Visitor_register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visitor_register ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visitor_register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
