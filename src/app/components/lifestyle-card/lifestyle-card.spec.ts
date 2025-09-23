import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleCard } from './lifestyle-card';

describe('LifestyleCard', () => {
  let component: LifestyleCard;
  let fixture: ComponentFixture<LifestyleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifestyleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestyleCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
