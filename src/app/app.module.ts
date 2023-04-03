import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ModalComponent } from './components/modal/modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FocusDirective } from './derictives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    CreateProductComponent,
    ModalComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
