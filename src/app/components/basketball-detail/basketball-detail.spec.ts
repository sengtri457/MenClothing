import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballDetail } from './basketball-detail';

describe('BasketballDetail', () => {
  let component: BasketballDetail;
  let fixture: ComponentFixture<BasketballDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketballDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketballDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
