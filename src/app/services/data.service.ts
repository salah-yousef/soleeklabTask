import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../shared/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.productUrl + id).pipe(
      tap(data => {
        console.log(`Products: ${JSON.stringify(data)}`);
      }),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, httpOptions);
  }

  editProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(this.productUrl + id, product, httpOptions);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(this.productUrl + id, httpOptions);
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
