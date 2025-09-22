import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracksuits } from './tracksuits';

describe('Tracksuits', () => {
  let component: Tracksuits;
  let fixture: ComponentFixture<Tracksuits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tracksuits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tracksuits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
