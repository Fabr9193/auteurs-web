import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LibraryComponent} from "./library/library.component";

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'library',
    component : LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
