import { Injectable } from '@angular/core';
import { Product } from '../../product';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 55000, stock: 10, status: 'Available', description: 'High performance laptop', brand: 'Dell', rating: 4.5, code: 'LP1001' },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 25000, stock: 0, status: 'Out of Stock', description: 'Latest Android phone', brand: 'Samsung', rating: 4.6, code: 'SP2001' },
    { id: 3, name: 'Headphones', category: 'Accessories', price: 3500, stock: 5, status: 'Limited', description: 'Noise cancelling headphones', brand: 'Sony', rating: 4.4, code: 'HP3001' },
    { id: 4, name: 'Keyboard', category: 'Accessories', price: 1500, stock: 20, status: 'Available', description: 'Mechanical keyboard', brand: 'Logitech', rating: 4.3, code: 'KB4001' },
    { id: 5, name: 'Gaming Mouse', category: 'Accessories', price: 1200, stock: 15, status: 'Available', description: 'RGB gaming mouse', brand: 'Razer', rating: 4.2, code: 'MS5001' },
    { id: 6, name: 'Monitor', category: 'Electronics', price: 12000, stock: 3, status: 'Limited', description: '24 inch LED monitor', brand: 'LG', rating: 4.5, code: 'MN6001' },
    { id: 7, name: 'Printer', category: 'Office', price: 8000, stock: 7, status: 'Available', description: 'All-in-one printer', brand: 'HP', rating: 4.1, code: 'PR7001' },
    { id: 8, name: 'Desk Chair', category: 'Furniture', price: 6000, stock: 2, status: 'Limited', description: 'Ergonomic office chair', brand: 'IKEA', rating: 4.3, code: 'CH8001' },
    { id: 9, name: 'External HDD', category: 'Storage', price: 4500, stock: 0, status: 'Out of Stock', description: '1TB external hard drive', brand: 'Seagate', rating: 4.4, code: 'HD9001' },
    { id: 10, name: 'USB Flash Drive', category: 'Storage', price: 700, stock: 50, status: 'Available', description: '64GB USB drive', brand: 'SanDisk', rating: 4.2, code: 'USB1001' }
  ];

  getProducts(): Product[] {
    return this.products
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.products[idx] = {...updated};
  }

  isAuthenticated(): boolean {
    return !! sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }


}
