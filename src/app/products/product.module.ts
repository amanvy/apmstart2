import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list.componenet';
import {ConvertToSpacesPipe} from './convert-to-spaces.pipe';
import {ProductDetailComponent} from './product-detail.component'

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [  ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
],

  imports: [
    
    
    RouterModule.forChild([
      {path: 'products',component : ProductListComponent},
      {path: 'products/:id',component : ProductDetailComponent},
    ]),
    SharedModule
   
  ]
})
export class ProductModule { }
