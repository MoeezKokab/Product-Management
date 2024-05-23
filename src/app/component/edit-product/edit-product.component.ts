import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ProductService} from "../../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import  {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  Id!: number;
  toastrservice = inject(ToastrService)
  formBuilder = inject(FormBuilder)
  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    brand: ['', Validators.required],
    image: [''],
    current_price: [''],
    price: [''],
    discount: [''],
    name: ['', Validators.required,],
  })

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
    public router: Router,

  ) {
  }

  onPress() {
    console.log("edit data", this.productForm.value)
    if (this.productForm.invalid) {
     this.toastrservice.error("please enter valid value")
      return
    } else {
      this.productService.updateProduct(this.productForm.value).subscribe((result) => {
        this.toastrservice.success("Data edited")
        this.router.navigateByUrl("/")
      })
    }
  }

  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.params['id']
    this.productService.getProductsByID(this.Id).subscribe((result) => {
      console.log(result)
      this.productForm.patchValue(result)

    })

  }

}
