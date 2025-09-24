import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagDatail } from './bag-datail';

describe('BagDatail', () => {
  let component: BagDatail;
  let fixture: ComponentFixture<BagDatail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagDatail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagDatail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
