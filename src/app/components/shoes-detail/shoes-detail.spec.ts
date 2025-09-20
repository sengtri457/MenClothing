import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDetail } from './shoes-detail';

describe('ShoesDetail', () => {
  let component: ShoesDetail;
  let fixture: ComponentFixture<ShoesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
