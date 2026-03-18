import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierService } from './supplier-service';

describe('SupplierService', () => {
  let component: SupplierService;
  let fixture: ComponentFixture<SupplierService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierService],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
