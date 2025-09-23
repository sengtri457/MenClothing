import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketDetail } from './jacket-detail';

describe('JacketDetail', () => {
  let component: JacketDetail;
  let fixture: ComponentFixture<JacketDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JacketDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacketDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
