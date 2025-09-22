import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodiesCard } from './hoodies-card';

describe('HoodiesCard', () => {
  let component: HoodiesCard;
  let fixture: ComponentFixture<HoodiesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoodiesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoodiesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
