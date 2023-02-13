import { LoginComponent } from './components/page/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { Pagina404Component } from './components/page/pagina404/pagina404.component';
import { EditpageComponent } from './components/page/editpage/editpage.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'edit', component:EditpageComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
