import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Product} from "../../types/product";


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!:Product;
  @Output() viewProduct= new  EventEmitter<number>()

  DetailFunction(){
    this.viewProduct.emit(this.product.id)
    console.log("press")
  }

}
