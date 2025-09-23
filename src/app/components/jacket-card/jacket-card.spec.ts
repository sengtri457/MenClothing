import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketCard } from './jacket-card';

describe('JacketCard', () => {
  let component: JacketCard;
  let fixture: ComponentFixture<JacketCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JacketCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacketCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
