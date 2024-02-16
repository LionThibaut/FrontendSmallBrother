import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User_profileComponent } from './user_profile.component';

describe('ProfileComponent', () => {
  let component: User_profileComponent;
  let fixture: ComponentFixture<User_profileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User_profileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User_profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
