import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
