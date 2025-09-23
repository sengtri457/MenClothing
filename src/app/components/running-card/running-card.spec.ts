import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningCard } from './running-card';

describe('RunningCard', () => {
  let component: RunningCard;
  let fixture: ComponentFixture<RunningCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
