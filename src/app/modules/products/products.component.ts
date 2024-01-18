import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from '../../models/products';
import {
  AppService
} from '../../shared/app.service';
import {
  Router
} from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers:[ConfirmationService,MessageService]
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  loading: boolean;

  constructor(private appService: AppService, private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,) {
    this.loading = false;
  }

  ngOnInit() {
    this.getProduct()
  }
  getProduct() {
    this.loading = true;
    this.appService.getProductsData().subscribe(res => {
      this.products = res['products'];
      this.loading = false;

    })
  }
  productDetails(product: Product) {
    console.log(product);
    this.router.navigate(['product-deatil', product.id]);
  }
  delete(id:number){
    this.appService.DeleteProductsData(id).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  
      })
  }
  deleteProduct(product: any) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + product.title + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.delete(product.id)
        }
    });
}

}