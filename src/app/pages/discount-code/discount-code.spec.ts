import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCode } from './discount-code';

describe('DiscountCode', () => {
  let component: DiscountCode;
  let fixture: ComponentFixture<DiscountCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
