import { Injectable } from '@angular/core';
 import { HttpClient, HttpErrorResponse } from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
 import { catchError, tap,map } from 'rxjs/operators';
 import {BookTrackerError} from './BookTrackerError'


import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor ( private http : HttpClient){
    
  }
  
  getProduct(): Observable <IProduct[] | BookTrackerError> { 
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      // tap(data => console.log('All' ,JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  getProductId( id : number ) : Observable <IProduct | undefined> {
    return this.getProduct()
    .pipe( 
      map( ( products : IProduct[]) => products.find( p => p.productId === id ) ) ,
      

    )
  }

  private handleError(error : HttpErrorResponse) : Observable<BookTrackerError> {
    let dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.message;
    dataError.friendlyMessage = `An error occured retrieving data ${error.status} and message : ${dataError.errorNumber}`;
    return throwError(dataError);
  }

  
//   getProduct():IProduct[] {
//     return [
//       {
//         "productId": 2,
//         "productName": "Garden Cart",
//         "productCode": "GDN-0023",
//         "releaseDate": "March 18, 2019",
//         "description": "15 gallon capacity rolling garden cart",
//         "price": 32.99,
//         "starRating": 4.2,
//         "imageUrl": "assets/images/garden_cart.png"
//       },
//       {
//         "productId": 5,
//         "productName": "Hammer",
//         "productCode": "TBX-0048",
//         "releaseDate": "May 21, 2019",
//         "description": "Curved claw steel hammer",
//         "price": 8.9,
//         "starRating": 4.8,
//         "imageUrl": "assets/images/hammer.png"
//       },
//       {
//         "productId": 8,
//         "productName": "Saw",
//         "productCode": "TBX-0022",
//         "releaseDate": "May 15, 2019",
//         "description": "15-inch steel blade hand saw",
//         "price": 11.55,
//         "starRating": 3.7,
//         "imageUrl": "assets/images/saw.png"
//       },
//     ]
//   }
 }
