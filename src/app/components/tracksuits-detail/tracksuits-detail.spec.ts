import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksuitsDetail } from './tracksuits-detail';

describe('TracksuitsDetail', () => {
  let component: TracksuitsDetail;
  let fixture: ComponentFixture<TracksuitsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracksuitsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksuitsDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
