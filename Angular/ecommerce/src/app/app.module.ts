import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import {CustomComponent} from './Components/Custom/custom.component';
import { BootstrapBComponent } from './Components/bootstrap-b/bootstrap-b.component';
import { GridcComponent } from './Components/gridc/gridc.component';
import { CardsComponent } from './Components/cards/cards.component';
import { HomeComponent } from './Components/Github/home/home.component';
import { SearchComponent } from './Components/Github/search/search.component';
import { ProfileComponent } from './Components/Github/profile/profile.component';
import { DetailsComponent } from './Components/Github/details/details.component';
import { OnwaydbComponent } from './Components/Github/onwaydb/onwaydb.component';
import { PropertyDBComponent } from './Components/property-db/property-db.component';
import { ProductsComponent } from './Components/products/products.component';
import { TwowaydbComponent } from './Components/twowaydb/twowaydb.component';
import { NgifCComponent } from './Components/ngif-c/ngif-c.component';
import { UsersProfileComponent } from './Components/users-profile/users-profile.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgifthenelseComponent } from './Components/ngifthenelse/ngifthenelse.component';
import { NgswitchdemoComponent } from './Components/ngswitchdemo/ngswitchdemo.component';
import { NgswitchCComponent } from './Components/ngswitch-c/ngswitch-c.component';
import { NgclassCComponent } from './Components/ngclass-c/ngclass-c.component';
import { NgstyleCComponent } from './Components/ngstyle-c/ngstyle-c.component';
import { ParentccComponent } from './Components/Parent-Child/Parent-to-Child/parentcc/parentcc.component';
import { ChildccComponent } from './Components/Parent-Child/Parent-to-Child/childcc/childcc.component';
import { ParentcComponent } from './Components/Parent-Child/Child-to-Parent/parentc/parentc.component';
import { ChildcComponent } from './Components/Parent-Child/Child-to-Parent/childc/childc.component';
import { UserdetailsCCComponent } from './Components/userdetails-cc/userdetails-cc.component';
import { HomeCCComponent } from './Components/home-cc/home-cc.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { CategoryComponent } from './Components/category/category.component';
import { ElectronicsComponent } from './Components/Internal-Routing/electronics/electronics.component';
import { JewellaryComponent } from './Components/Internal-Routing/jewellary/jewellary.component';
import { MensCComponent } from './Components/Internal-Routing/mens-c/mens-c.component';
import { WomensCComponent } from './Components/Internal-Routing/womens-c/womens-c.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CustomComponent,
    BootstrapBComponent,
    GridcComponent,
    CardsComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    DetailsComponent,
    OnwaydbComponent,
    PropertyDBComponent,
    ProductsComponent,
    TwowaydbComponent,
    NgifCComponent,
    UsersProfileComponent,
    NavbarComponent,
    NgifthenelseComponent,
    NgswitchdemoComponent,
    NgswitchCComponent,
    NgclassCComponent,
    NgstyleCComponent,
    ParentccComponent,
    ChildccComponent,
    ParentcComponent,
    ChildcComponent,
    UserdetailsCCComponent,
    HomeCCComponent,
    PagenotfoundComponent,
    CategoryComponent,
    ElectronicsComponent,
    JewellaryComponent,
    MensCComponent,
    WomensCComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
