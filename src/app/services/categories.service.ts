import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, tap, catchError, throwError} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: any = []
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }
  getAll(): Observable<any>{
    return this.http.get('https://fakestoreapi.com/products/categories').pipe(
      tap((categories)=> {
        this.categories = categories
        console.log(categories)
      }),
      catchError(this.errorHadler.bind(this))
    )
  }
  private errorHadler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(()=> error.message)
  }
}
