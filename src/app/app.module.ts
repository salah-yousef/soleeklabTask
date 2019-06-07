import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './components/star/star.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AlertComponent } from './components/alert/alert.component';
import { ShowProductComponent } from './components/show-product/show-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StarComponent,
    NavbarComponent,
    NewProductComponent,
    EditProductComponent,
    AlertComponent,
    ShowProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [AlertComponent, ShowProductComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
