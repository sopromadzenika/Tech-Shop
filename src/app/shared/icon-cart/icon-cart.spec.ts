import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCart } from './icon-cart';

describe('IconCart', () => {
  let component: IconCart;
  let fixture: ComponentFixture<IconCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCart],
    }).compileComponents();

    fixture = TestBed.createComponent(IconCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
