import { Component } from '@angular/core';
import { ProductServices } from 'src/app/services/products.services';
import { ModalService } from 'src/app/services/modal.service';
import { CategoriesService } from 'src/app/services/categories.service';

interface Filter {
  name: string;
  value: string;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  filtersList: Filter[] = [
    {
      name: 'По убыванию цены',
      value: 'price-max',
    },
    {
      name: 'По возрастанию цены',
      value: 'price-min',
    },
  ];
  title: string = 'my-app';
  selectedFilter: string;
  selectedCategory: string;
  loading: boolean = false;
  searchValue: string = '';

  constructor(
    public productsService: ProductServices,
    public modalService: ModalService,
    public categoriesService: CategoriesService
  ) {}

  changeFilter(){
    if(this.selectedFilter === this.filtersList[0].value) this.productsService.products = this.productsService.rankMaxPrice()
    else if(this.selectedFilter === this.filtersList[1].value) this.productsService.products = this.productsService.rankMinPrice()
  }
  changeCategory(){
    this.productsService.getProductsByCategory(this.selectedCategory).subscribe()

  }
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
    this.categoriesService.getAll().subscribe()
  }
}
