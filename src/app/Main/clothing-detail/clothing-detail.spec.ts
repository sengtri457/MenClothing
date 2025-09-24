import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingDetail } from './clothing-detail';

describe('ClothingDetail', () => {
  let component: ClothingDetail;
  let fixture: ComponentFixture<ClothingDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothingDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
