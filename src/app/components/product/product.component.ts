import { Component, Input } from "@angular/core";
import IProduct from "src/app/models/product";


@Component({
  selector: "product-component",
  templateUrl: "./product.component.html"
})

export class ProductComponent {
  @Input() product: IProduct
  isOpenDescription: boolean = false
}
