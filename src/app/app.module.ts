import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryModule} from '@ngx-gallery/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AgmCoreModule} from '@agm/core';
import { FooterComponent } from './components/footer/footer.component';
import { NewarrivalsComponent } from './components/newarrivals/newarrivals.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CartComponent } from './components/cart/cart.component';



const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:productId',
    component: ProductComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    NewarrivalsComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleryModule,
    RouterModule.forRoot(routes),
    NgxWebstorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    })



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


