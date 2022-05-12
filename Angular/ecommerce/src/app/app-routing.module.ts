import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './Components/cards/cards.component';
import { CategoryComponent } from './Components/category/category.component';
import { HomeComponent } from './Components/Github/home/home.component';
import { HomeCCComponent } from './Components/home-cc/home-cc.component';
import { ElectronicsComponent } from './Components/Internal-Routing/electronics/electronics.component';
import { JewellaryComponent } from './Components/Internal-Routing/jewellary/jewellary.component';
import { MensCComponent } from './Components/Internal-Routing/mens-c/mens-c.component';
import { WomensCComponent } from './Components/Internal-Routing/womens-c/womens-c.component';
import { NgclassCComponent } from './Components/ngclass-c/ngclass-c.component';
import { NgstyleCComponent } from './Components/ngstyle-c/ngstyle-c.component';
import { NgswitchCComponent } from './Components/ngswitch-c/ngswitch-c.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ParentcComponent } from './Components/Parent-Child/Child-to-Parent/parentc/parentc.component';
import { ParentccComponent } from './Components/Parent-Child/Parent-to-Child/parentcc/parentcc.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserdetailsCCComponent } from './Components/userdetails-cc/userdetails-cc.component';
import { UsersProfileComponent } from './Components/users-profile/users-profile.component';

const routes: Routes = [
  {
    path:"",component:HomeCCComponent
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
  },
  {
    path:"outputd",component:ParentcComponent
  },
  {
    path:"httpc",component:UserdetailsCCComponent
  },
  {
    path:'category',component:CategoryComponent,children:[
      {
        path:'electronics',component:ElectronicsComponent
      },
      {
        path:"jewellary",component:JewellaryComponent
      },
      {
        path:"mensc",component:MensCComponent
      },
      {
        path:"womensc",component:WomensCComponent
      }
    ]
  },
  {
    path:"**",component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
