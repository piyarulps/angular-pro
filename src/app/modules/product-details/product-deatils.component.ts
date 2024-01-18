import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.scss'
})
export class ProductDeatilsComponent implements OnInit {

  product!: Product;
  submitted:any;
  constructor(private appservice:AppService){
    console.log(1);
    
    this.appservice.productDetails.subscribe(res=>{
      console.log(2,res);
      
    })
  }

  ngOnInit(): void {
    
    
  }

}
