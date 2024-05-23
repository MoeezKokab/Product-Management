import {AfterViewInit, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ProductCardComponent} from "../product-card/product-card.component";
import {SearchComponent} from "../search/search.component";
import {ProductService} from "../../product.service";
import {Product} from "../../types/product";
import {routes} from "../../app.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  product: Product [] = [];
  filterProduct:Product [] = []
  router=inject(Router)

  constructor(
    public productService: ProductService
  ) {
  }

  ngOnInit(){
    this.productService.getProducts().subscribe((result)=>{
      console.log(result);
      console.log("result");
      this.product= result
      this.filterProduct=this.product
    })

  }

  onViewProduct(event: any) {
    console.log("view press", event)
    this.router.navigateByUrl("/product/"+event)
  }

  onSearch(event: string) {
    if(event){
      this.filterProduct = this.product.filter(x=>x.brand.toLowerCase().includes(event.toLowerCase()) );
    }
    else {
      this.filterProduct = this.product;
      console.log(this.product)
    }
  }
}



