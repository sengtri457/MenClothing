import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatDetail } from './hat-detail';

describe('HatDetail', () => {
  let component: HatDetail;
  let fixture: ComponentFixture<HatDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HatDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
