import {Component, inject} from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {Product} from "../../types/product";
import {MatButtonModule} from "@angular/material/button";
import {ProductService} from "../../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product = {
    brand : "",
    image : "",
    current_price :  "",
    price:   "",
    discount:   "",
    name:  "",
  }

  productService = inject(ProductService)
  router=inject(Router)
  onPress(){
    this.productService.addProduct(this.product).subscribe(result=>{
      alert("Data successfully added");
    })
    this.router.navigateByUrl("/")

  }

}
