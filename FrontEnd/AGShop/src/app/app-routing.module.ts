import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DetailsComponent } from './details/details.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';

const routes: Routes = [
  
  {path: '',component:LoginAndRegisterComponent},
  {path: 'display',component:DisplayPageComponent},
  {path:'detail/:id' , component:DetailsComponent},
  {path:'details',component:DetailsComponent},
  {path:'adminpanel',component:AdminPanelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
