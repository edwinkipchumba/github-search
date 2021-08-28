import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/home'},
  { path: 'home', component:UsersComponent},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
