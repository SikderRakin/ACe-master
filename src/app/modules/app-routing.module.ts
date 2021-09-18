import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEntryComponent } from '../admin/product-entry/product-entry.component';
import { CartComponent } from '../e-commerce/cart/cart.component';
import { ProductListComponent } from '../e-commerce/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'admin',
    component: ProductEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
