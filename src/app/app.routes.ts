import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Navi } from './components/navi/navi';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { EventBinding } from './databinding/event/event';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property/property';
import { Style } from './databinding/style/style';
import { TwoWayBinding } from './databinding/two-way/two-way';
import { Products } from './products/products';
import { ProductsList } from './products-list/products-list';
import { ProductDetails } from './product-details/product-details';
import { SuppliersList } from './suppliers-list/suppliers-list';
import { SupplierDetails } from './supplier-details/supplier-details';

export const routes: Routes = [{path: 'home', component: Home},{path: 'navi', component: Navi},{path: 'attribute', component: Attribute},{path: 'class', component: Class},
{path: 'event', component: EventBinding},{path: 'interpolation', component: Interpolation},{path: 'property', component: PropertyBinding},{path: 'style', component: Style},
{path: 'two-way', component: TwoWayBinding},{path: 'products', component: Products}, 
{path: 'prod-list', component: ProductsList, children: [{ path: ':id', children: [{ path: 'details', component: ProductDetails}]}]},
{path: 'supp-list', component: SuppliersList, children: [{ path: ':id', children: [{ path: 'supp-details', component: SupplierDetails}]}]}];
