import {Component, EventEmitter, Input, numberAttribute, OnInit, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Product} from "../../types/product";
import {ProductService} from "../../product.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {UpperCasePipe} from "@angular/common";
import {CurrencyPipe} from "../../currency.pipe";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink,UpperCasePipe,CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  Id: number = 0;

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.params['id']
    this.productService.getProductsByID(this.Id).subscribe((result) => {
      console.log(result)
      this.product = result

    })

  }


}
