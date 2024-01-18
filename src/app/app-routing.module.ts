import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./modules/home/home.module').then(m=> m.HomeModule)},
  {path:'product', loadChildren:()=> import('./modules/products/products.module').then(m=> m.ProductsModule)},
  {path:'product-deatil', loadChildren:()=> import('./modules/product-details/product-details.module').then(m=> m.ProductDetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
