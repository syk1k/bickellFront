import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DemandesComponent } from './demandes/demandes.component';
import { OffresComponent } from './offres/offres.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsDetailsComponent } from './produits-details/produits-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    AccountComponent,
    RegisterComponent,
    ContactComponent,
    DemandesComponent,
    OffresComponent,
    ProduitsComponent,
    ProduitsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
