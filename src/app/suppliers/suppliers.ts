import { Component } from '@angular/core';
import { Supplier } from '../supplier';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-suppliers',
  imports: [CommonModule],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css',
})
export class Suppliers {

  selectedSupplier: Supplier | null = null;
  showModal: boolean = false;

  suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: "ABC Industrial Supplies",
      location: "Manila, Philippines",
      email: "contact@abcindustrial.com",
      contactPerson: "Juan Dela Cruz",
      phone: "+63 912 345 6789",
      productsSupplied: ["Steel", "Bolts", "Nuts"]
    },
    {
      id: 2,
      supplierName: "Global Tech Parts",
      location: "Cebu, Philippines",
      email: "info@globaltechparts.com",
      contactPerson: "Maria Santos",
      phone: "+63 917 123 4567",
      productsSupplied: ["Microchips", "Sensors", "Cables"]
    },
    {
      id: 3,
      supplierName: "Prime Packaging Co.",
      location: "Davao, Philippines",
      email: "sales@primepackaging.com",
      contactPerson: "Carlos Reyes",
      phone: "+63 905 678 1234",
      productsSupplied: ["Boxes", "Plastic Wrap", "Labels"]
    },
    {
      id: 4,
      supplierName: "FreshFarm Produce",
      location: "Laguna, Philippines",
      email: "hello@freshfarm.ph",
      contactPerson: "Ana Lopez",
      phone: "+63 998 765 4321",
      productsSupplied: ["Vegetables", "Fruits", "Herbs"]
    },
    {
      id: 5,
      supplierName: "Metro Hardware Hub",
      location: "Quezon City, Philippines",
      email: "support@metrohardware.com",
      contactPerson: "Luis Garcia",
      phone: "+63 921 456 7890",
      productsSupplied: ["Tools", "Pipes", "Paint"]
    },
    {
      id: 6,
      supplierName: "EcoClean Solutions",
      location: "Pasig, Philippines",
      email: "info@ecoclean.ph",
      contactPerson: "Bea Mendoza",
      phone: "+63 932 111 2233",
      productsSupplied: ["Cleaning Agents", "Sanitizers", "Disinfectants"]
    },
    {
      id: 7,
      supplierName: "Island Office Supplies",
      location: "Iloilo, Philippines",
      email: "sales@islandoffice.com",
      contactPerson: "Mark Villanueva",
      phone: "+63 915 222 3344",
      productsSupplied: ["Paper", "Pens", "Ink"]
    },
    {
      id: 8,
      supplierName: "BuildRight Construction Goods",
      location: "Batangas, Philippines",
      email: "contact@buildright.com",
      contactPerson: "Ramon Bautista",
      phone: "+63 926 333 4455",
      productsSupplied: ["Cement", "Sand", "Gravel"]
    },
    {
      id: 9,
      supplierName: "CoolTech Appliances",
      location: "Makati, Philippines",
      email: "help@cooltech.com",
      contactPerson: "Sofia Cruz",
      phone: "+63 907 444 5566",
      productsSupplied: ["Refrigerators", "Air Conditioners", "Microwaves"]
    },
    {
      id: 10,
      supplierName: "AgriPro Feeds",
      location: "Bulacan, Philippines",
      email: "info@agriprofeeds.com",
      contactPerson: "Pedro Navarro",
      phone: "+63 918 555 6677",
      productsSupplied: ["Animal Feed", "Grains", "Supplements"]
    }
  ];

  viewSupplier(supplier: Supplier) {
    this.selectedSupplier = supplier;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedSupplier = null;
  }
}
