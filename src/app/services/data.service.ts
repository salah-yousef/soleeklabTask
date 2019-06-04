import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsUrl = 'http://5cf50f10ca57690014ab396f.mockapi.io/api/products';
  private productUrl = 'http://5cf50f10ca57690014ab396f.mockapi.io/api/products/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(data => {
        console.log(`All: ${JSON.stringify(data)}`)
      }),
      catchError(this.handleError)
    );
  }

  getProduct(id: string) {
    return this.http.get<Product[]>(this.productUrl + id).pipe(
      tap(data => {
        console.log(`manufacturerdetail: ${JSON.stringify(data)}`)
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

export interface Product {
  id: number;
  Name: string;
  SKU: string;
  Date: string;
  Description: string;
  Price: number;
  starRating: number;
  Image: string;
}
