import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {path: 'new', component: NewProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'products', component: ProductsComponent},
  { path: '',   redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
