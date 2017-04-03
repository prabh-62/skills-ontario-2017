import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CourseCardComponent} from './course-card/course-card.component';
import {MainRoutingModule} from './main-routing.module';
import {PouchdbService} from '../services/pouchdb.service';
import {ReactiveFormsModule} from '@angular/forms';
import { CallbackComponent } from './callback/callback.component';
import {RegisterGuard} from '../services/register.guard';
import {AdminGuard} from '../services/admin.guard';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AdminComponent,
    RegisterComponent,
    SidebarComponent,
    CourseCardComponent,
    CallbackComponent
  ],
  providers: [
    AdminGuard,
    PouchdbService,
    RegisterGuard
  ]
})
export class MainModule {
}
