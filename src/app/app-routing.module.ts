import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
//import { CanActivateRouteGuard } from "./can-activate-route.guard";
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
   // canActivate: [CanActivateRouteGuard],
  },
 /* {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
  },*/
  {
    path: "profile",
    component: ProfileComponent
   // canActivate: [CanActivateRouteGuard],
  },
  /*{
    path: "about",
    component: AboutComponent,
    canActivate: [CanActivateRouteGuard],
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
