import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeatilsComponent } from './product-deatils.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProductDeatilsComponent },
]


@NgModule({
  declarations: [
    ProductDeatilsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ],
  providers:[]
})
export class ProductDetailsModule { }
