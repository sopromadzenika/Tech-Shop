import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInput } from './product-input';

describe('ProductInput', () => {
  let component: ProductInput;
  let fixture: ComponentFixture<ProductInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
