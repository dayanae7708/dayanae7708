import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'app',component:AppComponent},

];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule{}