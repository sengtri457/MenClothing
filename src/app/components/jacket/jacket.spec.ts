import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jacket } from './jacket';

describe('Jacket', () => {
  let component: Jacket;
  let fixture: ComponentFixture<Jacket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jacket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jacket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
