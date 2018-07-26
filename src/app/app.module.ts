import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from '@ng-forms/file-upload';

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


import { CookieService } from "ngx-cookie-service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatePostComponent } from './create-post/create-post.component'

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
    ProduitsDetailsComponent,
    DashboardComponent,
    CreateProduitComponent,
    CreateUserComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
