import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ChoseUsComponent } from './components/chose-us/chose-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'us', component:ChoseUsComponent},
  {path:'menu', component:MenuComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'about', component:AboutComponent},
  {path:'about', component:AboutComponent},
  {path:'about', component:AboutComponent}]


// import { LoginComponent } from './admin/login/login.component';
// import { RegisterComponent } from './admin/register/register.component';
// import { AppComponent } from './app.component';

// const routes: Routes = [
//   {path: 'admin', component: AppComponent,
// children: [
//   {path: 'login', component: LoginComponent},
//   {path: 'register', component: RegisterComponent},
// ]}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
