import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Navi } from './components/navi/navi';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { Event } from './databinding/event/event';
import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Style } from './databinding/style/style';
import { TwoWay } from './databinding/two-way/two-way';

export const routes: Routes = [{path: 'home', component: Home},{path: 'navi', component: Navi},{path: 'attribute', component: Attribute},{path: 'class', component: Class},
{path: 'event', component: Event},{path: 'interpolation', component: Interpolation},{path: 'property', component: Property},{path: 'style', component: Style},
{path: 'two-way', component: TwoWay}];
