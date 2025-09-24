import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hat } from './hat';

describe('Hat', () => {
  let component: Hat;
  let fixture: ComponentFixture<Hat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
