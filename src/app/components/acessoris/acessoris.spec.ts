import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessoris } from './acessoris';

describe('Acessoris', () => {
  let component: Acessoris;
  let fixture: ComponentFixture<Acessoris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acessoris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessoris);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
