import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoescard } from './shoescard';

describe('Shoescard', () => {
  let component: Shoescard;
  let fixture: ComponentFixture<Shoescard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shoescard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shoescard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
