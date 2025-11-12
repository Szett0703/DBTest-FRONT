import { Routes } from '@angular/router';
import { MainLayoutComponent } from './app/layout/main-layout/main-layout';
import { HomeComponent } from './app/pages/home/home';
import { ProductsComponent } from './app/pages/products/products';
import { ProductDetailComponent } from './app/pages/product-detail/product-detail';
import { NotFoundComponent } from './app/pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Inicio' },
      { path: 'products', component: ProductsComponent, title: 'Productos' },
      { path: 'products/:id', component: ProductDetailComponent, title: 'Detalle de producto' },
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'No encontrado' }
];
