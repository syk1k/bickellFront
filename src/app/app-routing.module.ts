import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DemandesComponent } from './demandes/demandes.component';
import { OffresComponent } from './offres/offres.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsDetailsComponent } from './produits-details/produits-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  	{
		path: "",
		component: HomeComponent,
  	},
  	{
		path: "admin/dasboard",
		component: DashboardComponent,
  	},
  	{
		path:'blog', 
		component: BlogComponent,
  	},
  	{
		path:'account', 
		component: AccountComponent,
  	},
  	{
		path:'register', 
		component: RegisterComponent,
	},
	{
		path:'contact', 
		component: ContactComponent
	},
	{ 
		path: 'demandes', 
		component: DemandesComponent,
	},
	{ 
		path: 'offres' ,
		component: OffresComponent,
	},
	{ 
		path: 'create/user' ,
		component: CreateUserComponent,
	},
	{ 
		path: 'create/product' ,
		component: CreateProduitComponent,
	},
	{ 
		path: 'create/post' ,
		component: CreatePostComponent,
	},
	{ 
		path: 'produits' ,
		component: ProduitsComponent,
	},
	{ 
		path: 'produit/:id' ,
		component: ProduitsDetailsComponent,
	},
	{ 
		path: '**', 
		component: HomeComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

