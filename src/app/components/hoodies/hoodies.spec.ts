import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoodies } from './hoodies';

describe('Hoodies', () => {
  let component: Hoodies;
  let fixture: ComponentFixture<Hoodies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoodies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hoodies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
