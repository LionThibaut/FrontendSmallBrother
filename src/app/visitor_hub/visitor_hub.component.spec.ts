import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visitor_hubComponent } from './visitor_hub.component';

describe('VisitorHubComponent', () => {
  let component: Visitor_hubComponent;
  let fixture: ComponentFixture<Visitor_hubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visitor_hubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visitor_hubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
