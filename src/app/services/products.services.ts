import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, catchError, throwError, retry, delay, tap} from 'rxjs'
import IProduct from '../models/product'
import { ErrorService } from './error.service'
@Injectable({
  providedIn: "root"
})

export class ProductServices{
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ){}
  products: IProduct[] = []
  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      delay(1000),
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHadler.bind(this))
    )
  }
  create(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(tap(prod=> {
      console.log(prod)
      this.products.push(prod)
    }))
  }
  getProductsByCategory(category: string):  Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`).pipe(
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHadler.bind(this))
    )
  }
  rankMinPrice(){
    return this.products.sort((item1, item2) => item1.price - item2.price)
  }
  rankMaxPrice(){
    return this.products.sort((item1, item2) => item2.price - item1.price)
  }
  private errorHadler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=> error.message)
  }
}
