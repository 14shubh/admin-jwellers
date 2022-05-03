import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:SigninComponent},
  {path:"dashboard", component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"add-category",component:AddCategoryComponent,canActivate:[AuthGuard]},
  {path:"add-product",component:AddProductComponent,canActivate:[AuthGuard]},
  {path:"view-category",component:ViewCategoryComponent,canActivate:[AuthGuard]},
  {path:"view-product",component:ViewProductComponent,canActivate:[AuthGuard]},
  {path:"customer-list",component:CustomerListComponent,canActivate:[AuthGuard]},
  {path:"sign-in",component:SigninComponent},
  {path:"update-category",component:UpdateCategoryComponent,canActivate:[AuthGuard]},
  {path:"update-product",component:UpdateProductComponent,canActivate:[AuthGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
