import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatCard } from './hat-card';

describe('HatCard', () => {
  let component: HatCard;
  let fixture: ComponentFixture<HatCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HatCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
