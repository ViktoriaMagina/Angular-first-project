import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms'
import { ModalService } from 'src/app/services/modal.service';
import { ProductServices } from 'src/app/services/products.services';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(private productServices: ProductServices, private modalService: ModalService){

  }
 form = new FormGroup({
  title: new FormControl<string>("", [
    Validators.required,
    Validators.minLength(5)
  ]),
  description: new FormControl<string>("")
 })
 get title(){
  return this.form.controls.title as FormControl
 }
 submit(){
  if(this.form.status === "VALID"){
    this.productServices.create({
      title: this.form.controls.title.value as string,
      price: 13.5,
      description: this.form.controls.description.value as string,
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 5,
        count: 100
      },
    }).subscribe(()=> {
      this.modalService.close()
    })
  }

 }
}
