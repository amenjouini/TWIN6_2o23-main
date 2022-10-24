import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdetailProductComponent } from './rdetail-product.component';

describe('RdetailProductComponent', () => {
  let component: RdetailProductComponent;
  let fixture: ComponentFixture<RdetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdetailProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
