import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  	{
		path: "",
		component: HomeComponent, 
		data:{title:"Home"}
  	},
  	{
		path:'blog', 
		component: BlogComponent,
		data:{title:"Blog"}
  	},
  	{
		path:'account', 
		component: AccountComponent,
		data:{title:"Account"}
  	},
  	{
		path:'register', 
		component: RegisterComponent,
		data:{title:"Register"}
	},
	{
		path:'contact', 
		component: ContactComponent
	},
	{ 
		path: '**', 
		component: HomeComponent,
		data:{title:"Home"} 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

