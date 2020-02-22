import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './service/menu/menu.component';
import { CateringComponent } from './catering/catering.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'catering',component:CateringComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
