import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { AppService } from '../../shared/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
    products!: Product[];

    constructor(private appService: AppService, private router:Router) {}

    ngOnInit() {
        this.appService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
    productDetails(product:Product){
        this.appService.setDetaiuls(product);
        this.router.navigateByUrl('product-deatil');

    }
}