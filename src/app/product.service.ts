import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "./types/product";

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(
   public  http: HttpClient
  ) {

  }
  getProducts() {
    return this.http.get<Product []>("http://localhost:3000/product")
  }

  getProductsByID(ID:number) {
    return this.http.get<Product >("http://localhost:3000/product/"+ID)
  }

  addProduct(product: Product) {
    return this.http.post<Product>("http://localhost:3000/product/", product)
  }

  updateProduct(product: Product) {
    return this.http.put<Product>("http://localhost:3000/product/"+product.id, product)
  }
}
