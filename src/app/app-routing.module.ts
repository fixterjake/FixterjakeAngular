import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/public/home/home.component';
import { AdminHomeComponent } from './views/admin/admin-home/admin-home.component';


const routes: Routes = [
  {path: "",           component: HomeComponent},
  {path: "Admin/Home", component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
