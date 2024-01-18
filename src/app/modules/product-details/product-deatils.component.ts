import {
  Component,
  OnInit
} from '@angular/core';
import {
  AppService
} from '../../shared/app.service';
import {
  Product
} from '../../models/products';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MessageService
} from 'primeng/api';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.scss',
  providers: [MessageService]
})


export class ProductDeatilsComponent implements OnInit {
  product!: any;
  allProducts!: any;
  productId: any;
  productForm: FormGroup
  category: any;
  selectedCategory: any
  filteredCountries: any[];
  loading: boolean;
  selectedItems: any[] | undefined;

  items: any[] | undefined;
  constructor(private messageService: MessageService, private fb: FormBuilder, private appService: AppService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    console.log(1);
    this.filteredCountries = [];
    this.loading = false;
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      similarProduct: [null, Validators.required],

    })

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log(this.productId);
      this.getProduct();
      this.getCategory();
      this.getAllProduct();
    })
  }

  filterProduct(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.allProducts.length; i++) {
      let name = this.allProducts[i];
      console.log(name.title.toLowerCase());
      console.log(name.title.toLowerCase().indexOf(query.toLowerCase()));

      if (name.title.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(name);
      }
    }

    this.filteredCountries = filtered;
    console.log(this.filteredCountries);

  }

  getCategory() {
    this.appService.getCategory().subscribe(res => {
      console.log(res);
      this.category = res;

    })
  }
  getAllProduct() {
    this.appService.getProductsData().subscribe(res => {
      this.allProducts = res['products'];
    })
  }
  getProduct() {
    this.loading = true;
    this.appService.getProductsDetails(this.productId).subscribe(res => {
      console.log(2, res);
      this.product = res;
      this.productForm.patchValue({
        title: res.title,
        description: res.description,
        category: res.category,
        price: res.price,
      });
      this.loading = false;

    })
  }
  updateProduct() {

    this.appService.updateProduct(this.productId, this.productForm.value).subscribe(res => {
      console.log(res);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'successfully updated'
      });

    })
  }
  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }
  back() {
    this.router.navigateByUrl("/product")
  }
}