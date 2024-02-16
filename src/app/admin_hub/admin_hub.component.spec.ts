import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_hubComponent } from './admin_hub.component';

describe('AdminHubComponent', () => {
  let component: Admin_hubComponent;
  let fixture: ComponentFixture<Admin_hubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin_hubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin_hubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
