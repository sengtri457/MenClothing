import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessoriesdetail } from './acessoriesdetail';

describe('Acessoriesdetail', () => {
  let component: Acessoriesdetail;
  let fixture: ComponentFixture<Acessoriesdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acessoriesdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessoriesdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
