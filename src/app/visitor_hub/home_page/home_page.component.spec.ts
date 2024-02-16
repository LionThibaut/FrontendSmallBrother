import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home_pageComponent } from './home_page.component';

describe('HomeComponent', () => {
  let component: Home_pageComponent;
  let fixture: ComponentFixture<Home_pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home_pageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home_pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
