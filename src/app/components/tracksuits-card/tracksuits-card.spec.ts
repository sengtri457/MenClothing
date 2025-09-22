import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksuitsCard } from './tracksuits-card';

describe('TracksuitsCard', () => {
  let component: TracksuitsCard;
  let fixture: ComponentFixture<TracksuitsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracksuitsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksuitsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
