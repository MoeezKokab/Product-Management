import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ProductDetailComponent} from "./component/product-detail/product-detail.component";
import {AddProductComponent} from "./component/add-product/add-product.component";
import {EditProductComponent} from "./component/edit-product/edit-product.component";

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"products",
    component:HomeComponent
  },
  {
    path:"product/:id",
    component:ProductDetailComponent,
  },
  {
    path:"add-product",
    component:AddProductComponent,
  },
  {
    path:"edit-product/:id",
    component:EditProductComponent,
  }

];
