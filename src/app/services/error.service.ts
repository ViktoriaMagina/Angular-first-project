import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors$ = new Subject<string>()
  handle(message: string){
    this.errors$.next(message)
  }
  clear(){
    this.errors$.next("")
  }
}
