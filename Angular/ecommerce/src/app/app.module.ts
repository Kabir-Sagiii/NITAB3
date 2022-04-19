import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
