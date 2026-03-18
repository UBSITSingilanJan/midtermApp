import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier-service/supplier-service';

@Component({
  selector: 'app-suppliers-list',
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './suppliers-list.html',
  styleUrl: './suppliers-list.css',
})
export class SuppliersList implements OnInit{

  supplier: Supplier[] = [];
  returnUrl: string | null = null;
  selectedId: number | null = null;
  
  constructor (
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.supplier = this.supplierService.getSuppliers();
  }

  getSupplier(s: Supplier): void {
    this.selectedId = s.id;
    this.router.navigate([ '/supp-list', s.id, 'supp-details']);
  }
}
