import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router'
import {ProductService} from './product.service';
import { Subscription } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { BookTrackerError } from './BookTrackerError';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  sub : Subscription;
  errorMessage  ='';
  constructor(private route: ActivatedRoute, private router: Router , private productService :ProductService ) { }

  ngOnInit() {
    // let  id = Number(this.route.snapshot.paramMap.get('id'))
    
    // this.pageTitle  += `:${id}`;

    // this.sub =  this.productService.getProductId( id ).
    // subscribe(
    //    (next : IProduct |  BookTrackerError ) =>  this.product  = <IProduct> next,
    //    (err : BookTrackerError) => console.log( err.friendlyMessage) ,
    //      () => console.log("all done")
    // )

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);

    }
    else { 
      console.log('Not an id ')
    }
  }

  getProduct(id: number): void {
    this.sub =  this.productService.getProductId(id).subscribe(
     ( next : IProduct )=> this.product = next,
     ( err : any) => this.errorMessage = err
    

    )
    
   
    

    // this.productService.getProduct()
    // .subscribe(
    //   (next : IProduct[] | BookTrackerError )   =>{ 
    //     this.products =  <IProduct[]>next;
    //     this.filteredProducts = this.products
    //  } ,
    //   (err : BookTrackerError) => console.log( err.friendlyMessage) ,
    //   () => console.log("all done")
     
    //   )

  //   if ( id == 2 ){
  //   this.product  = {
  //     "productId": id,
  //     "productName": "Garden Cart",
  //     "productCode": "GDN-0023",
  //     "releaseDate": "March 18, 2019",
  //     "description": "15 gallon capacity rolling garden cart",
  //     "price": 32.99,
  //     "starRating": 4.2,
  //     "imageUrl": "assets/images/garden_cart.png"

  //   }
  //  }
  //  else if ( id ==5 ){
  //   this.product  = {
  //     "productId": id,
  //     "productName": "Hammer",
  //     "productCode": "TBX-0048",
  //     "releaseDate": "May 21, 2019",
  //     "description": "Curved claw steel hammer",
  //     "price": 8.9,
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/hammer.png"

  //   }

  //  }

  //  else if ( id ==8 ){
  //   this.product  = {
  //     "productId": id,
  //     "productName": "Saw",
  //       "productCode": "TBX-0022",
  //       "releaseDate": "May 15, 2019",
  //       "description": "15-inch steel blade hand saw",
  //       "price": 11.55,
  //       "starRating": 3.7,
  //       "imageUrl": "assets/images/saw.png"

  //   }

  //  }

       
   }

  onBack(): void {
    this.router.navigate(['/products'])
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
  
}



