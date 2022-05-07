import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './Components/cards/cards.component';
import { HomeComponent } from './Components/Github/home/home.component';
import { NgclassCComponent } from './Components/ngclass-c/ngclass-c.component';
import { NgstyleCComponent } from './Components/ngstyle-c/ngstyle-c.component';
import { NgswitchCComponent } from './Components/ngswitch-c/ngswitch-c.component';
import { ParentccComponent } from './Components/Parent-Child/Parent-to-Child/parentcc/parentcc.component';
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
  },
  {
    path:"ngclass",component:NgclassCComponent
  },
  {
    path:"ngstyle",component:NgstyleCComponent
  },
  {
    path:"inputd",component:ParentccComponent
  },
  {
    path:'github',component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
