import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {CallbackComponent} from './callback/callback.component';
import {RegisterGuard} from '../services/register.guard';
import {AdminGuard} from '../services/admin.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'oauth/callback',
    component: CallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RegisterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
