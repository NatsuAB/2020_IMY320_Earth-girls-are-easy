import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  /*{ path: "", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [CanActivateRouteGuard],
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
