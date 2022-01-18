import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseURL = 'http://localhost:8080/product'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<any>{
    return this.httpClient.get(baseURL);
  }

  getProduct(slug:any):Observable<any>{
    return this.httpClient.get(`${baseURL}/${slug}`);
  }

}
