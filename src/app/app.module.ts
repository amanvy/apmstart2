import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';




import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductModule } from './products/product.module'
import { FormsModule } from '@angular/forms';
import { UserSettingFormComponent } from './user-setting-form/user-setting-form.component';
import {ButtonsModule} from "ngx-bootstrap/buttons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserSettingFormComponent,
     
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot(),
    
    RouterModule.forRoot([
         { path: 'Form', component: UserSettingFormComponent },
        
          { path: 'welcome', component: WelcomeComponent },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
           { path: '***', redirectTo: 'welcome', pathMatch: 'full' }
       ]),
    ProductModule,
    

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
