import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CourseCardComponent} from './course-card/course-card.component';
import {MainRoutingModule} from './main-routing.module';
import {PouchdbService} from '../services/pouchdb.service';
import {AuthGuard} from '../auth/auth.guard';
import {ReactiveFormsModule} from "@angular/forms";
import { CallbackComponent } from './callback/callback.component';
import {ActivatedRoute, RouterState} from "@angular/router";

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
    AuthGuard,
    PouchdbService
  ]
})
export class MainModule {
}
