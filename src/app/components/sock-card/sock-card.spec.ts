import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SockCard } from './sock-card';

describe('SockCard', () => {
  let component: SockCard;
  let fixture: ComponentFixture<SockCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SockCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SockCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
