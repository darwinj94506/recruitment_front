import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/product/list/list.component';
import { CreateComponent } from './components/product/create/create.component';
import { UpdateComponent } from './components/product/update/update.component';
import { LoginGuard } from './services/login.guard';


const routes: Routes = [
  
  {
    
    path:'',
    component: MainComponent,
    canActivate: [LoginGuard],
    children:[
      {
        path:'',
        component: ListComponent
      },
      {
        path:'products',
        component: ListComponent
      },
      {
        path:'create-product',
        component: CreateComponent
      },
      {
        path:'update-product',
        component: UpdateComponent
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
