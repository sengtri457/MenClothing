import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sock } from './sock';

describe('Sock', () => {
  let component: Sock;
  let fixture: ComponentFixture<Sock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
