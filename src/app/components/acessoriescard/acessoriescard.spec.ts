import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acessoriescard } from './acessoriescard';

describe('Acessoriescard', () => {
  let component: Acessoriescard;
  let fixture: ComponentFixture<Acessoriescard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acessoriescard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acessoriescard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
