import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProducts } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.apiURL);
  }
}
