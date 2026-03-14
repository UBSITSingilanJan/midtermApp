import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../services/product-service/product-service';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  saveProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product);
      this.router.navigate(['/prod-list']);
    }
  }

  goBack(): void {
    this.router.navigate(['/prod-list']);
  }
}
