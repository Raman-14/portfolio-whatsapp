import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home-portfolio',
  },
  {
    path:'about',
    component:AboutComponent,
    title:'About-portfolio',
  },
  {
    path:'work',
    component:WorkComponent,
    title:'Work-portfolio',
  },
  {
    path:'contact',
    component:ContactComponent,
    title:'Contact-portfolio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
