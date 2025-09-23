import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleDatail } from './lifestyle-datail';

describe('LifestyleDatail', () => {
  let component: LifestyleDatail;
  let fixture: ComponentFixture<LifestyleDatail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifestyleDatail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifestyleDatail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
