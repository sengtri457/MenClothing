import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesDetail } from './hoodies-detail';

describe('HoodiesDetail', () => {
  let component: HoodiesDetail;
  let fixture: ComponentFixture<HoodiesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoodiesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoodiesDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
