import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier-service/supplier-service';

@Component({
  selector: 'app-supplier-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.css',
})
export class SupplierDetails implements OnInit {
  supplier: Supplier | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.supplier = this.supplierService.getSupplierById(id);
  }

  saveSupplier(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      this.router.navigate(['/supp-list']);
    }
  }

  goBack(): void {
    this.router.navigate(['/supp-list']);
  }
}
