import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookTrackerError } from './BookTrackerError';
import {IProduct} from './product';
import {ProductService} from './product.service'


@Component({
    selector : 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls : [ './product-list.component.css'],
    //  providers :[ProductService]

})

export class ProductListComponent implements OnInit{
    // interpolation
    title = 'aman';

    pageTitle : string = 'ProductList';
    imageWidth = 50;
    imageMargin = 2;
    showimage :boolean  = false;
    
    listFilter1: string ;  
    sub : Subscription 
    title2 : "change";


    public get listFilter(): string {
      return this.listFilter1;
    }

    public set listFilter(value: string) {
      this.listFilter1 = value;
      // this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
      this.filteredProducts = this.performFilter(this.listFilter);
    }
    
   
     
    filteredProducts : IProduct[];
    products :IProduct[] = [];
    //  products :IProduct[] = [
      // {
      //   "productId": 2,
      //   "productName": "Garden Cart",
      //   "productCode": "GDN-0023",
      //   "releaseDate": "March 18, 2019",
      //   "description": "15 gallon capacity rolling garden cart",
      //   "price": 32.999,
      //   "starRating": 4.2,
      //   "imageUrl": "assets/images/garden_cart.png"
      // },
      // {
      //   "productId": 5,
      //   "productName": "Hammer",
      //   "productCode": "TBX-0048",
      //   "releaseDate": "May 21, 2019",
      //   "description": "Curved claw steel hammer",
      //   "price": 8.9,
      //   "starRating": 4.8,
      //   "imageUrl": "assets/images/hammer.png"
      // },
      // {
      //   "productId": 8,
      //   "productName": "Saw",
      //   "productCode": "TBX-0022",
      //   "releaseDate": "May 15, 2019",
      //   "description": "15-inch steel blade hand saw",
      //   "price": 11.548,
      //   "starRating": 3.7,
      //   "imageUrl": "assets/images/saw.png"
      // },
      // {
      //   "productId": 10,
      //   "productName": "Video Game Controller",
      //   "productCode": "GMG-0042",
      //   "releaseDate": "October 15, 2018",
      //   "description": "Standard two-button video game controller",
      //   "price": 35.95,
      //   "starRating": 4.6,
      //   "imageUrl": "assets/images/xbox-controller.png"
      // }
      
       
    //  ]

     
    // constructor(){
    //   this.filteredProducts = this.products;
    //    this.listFilter = 'cart';   
    // }
      

   
     
        
    performFilter(filterBy : string) :IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      // return this.products.filter((product ) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      return this.products.filter((product ) => product.productName.toLocaleLowerCase().includes(filterBy));
    }
 
    
    toggle ():void {
      this.showimage = !this.showimage;
    }


    
    //  performFilter(filterBy : string) :IProduct[] {
    //    filterBy = filterBy.toLocaleLowerCase();
    //    return this.products.filter((product ) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    //  }


     onRatingClicked(message :string) :void {
       this.pageTitle = 'Product List ' + message ;
     }


     constructor(private productService :ProductService ){
      this.listFilter = 'cart'; 
      }

  
      ngOnInit() : void {

      this.sub =  this.productService.getProduct()
       .subscribe(
         (next : IProduct[] | BookTrackerError )   =>{ 
           this.products =  <IProduct[]>next;
           this.filteredProducts = this.products
        } ,
         (err : BookTrackerError) => console.log( err.friendlyMessage) ,
         () => console.log("all done")
        
         )

       }

       ngOnDestroy() {
         this.sub.unsubscribe()
       }
      
        

      
      
       
    }

    // button () { 
    //   this.products[0].starRating = 5 
    // }

