import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballCard } from './basketball-card';

describe('BasketballCard', () => {
  let component: BasketballCard;
  let fixture: ComponentFixture<BasketballCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketballCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketballCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
