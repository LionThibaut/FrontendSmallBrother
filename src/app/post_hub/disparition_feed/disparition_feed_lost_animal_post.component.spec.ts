import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disparition_feed_lost_animal_postComponent } from './disparition_feed_lost_animal_post.component';

describe('AnimalprofileComponent', () => {
  let component: Disparition_feed_lost_animal_postComponent;
  let fixture: ComponentFixture<Disparition_feed_lost_animal_postComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Disparition_feed_lost_animal_postComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disparition_feed_lost_animal_postComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
