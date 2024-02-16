import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User_profile_animal_list_displayComponent } from './user_profile_animal_list_display.component';

describe('ConsultMyAnimalsComponent', () => {
  let component: User_profile_animal_list_displayComponent;
  let fixture: ComponentFixture<User_profile_animal_list_displayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User_profile_animal_list_displayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User_profile_animal_list_displayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
