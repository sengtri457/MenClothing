import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SockDetail } from './sock-detail';

describe('SockDetail', () => {
  let component: SockDetail;
  let fixture: ComponentFixture<SockDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SockDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SockDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
