import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './Components/cards/cards.component';
import { NgswitchCComponent } from './Components/ngswitch-c/ngswitch-c.component';
import { ProductsComponent } from './Components/products/products.component';
import { UsersProfileComponent } from './Components/users-profile/users-profile.component';

const routes: Routes = [
  {
    path:"",component:CardsComponent
  }, 
  {
    path:'ngswitch',component:NgswitchCComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'users',component:UsersProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
