import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserboardsComponent } from './pages/userboards/userboards.component';

const routes: Routes = [
  {
   path: '',
   component: LoginComponent
  },
  {
    path: 'boards',
    component: UserboardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
