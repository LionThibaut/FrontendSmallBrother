import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundFeedAnimalPostComponent } from './found-feed-animal-post.component';

describe('FoundFeedAnimalPostComponent', () => {
  let component: FoundFeedAnimalPostComponent;
  let fixture: ComponentFixture<FoundFeedAnimalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundFeedAnimalPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundFeedAnimalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
