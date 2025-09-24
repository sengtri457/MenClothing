import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagCard } from './bag-card';

describe('BagCard', () => {
  let component: BagCard;
  let fixture: ComponentFixture<BagCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
