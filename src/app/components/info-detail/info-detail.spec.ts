import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDetail } from './info-detail';

describe('InfoDetail', () => {
  let component: InfoDetail;
  let fixture: ComponentFixture<InfoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
