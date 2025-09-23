import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningDetail } from './running-detail';

describe('RunningDetail', () => {
  let component: RunningDetail;
  let fixture: ComponentFixture<RunningDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
