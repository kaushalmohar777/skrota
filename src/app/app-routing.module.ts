import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,
    pathMatch:'full'
  },
{
  path:'home', component: HomeComponent,
},
{
  path:'about', component: AboutComponent
},
{ path:'contact', component: ContactComponent },
{ path:'services', component: ServicesComponent },
// { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
   useHash: false,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
