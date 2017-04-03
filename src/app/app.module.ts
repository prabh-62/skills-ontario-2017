import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainModule} from './main/main.module';
import {LoginComponent} from './main/login/login.component';
import {requestOptionsProvider} from './auth/DefaultRequestOptions';
import {ApolloModule} from 'apollo-angular';
import {provideClient} from './services/apollo-init';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ApolloModule.forRoot(provideClient),
    AppRoutingModule,
    MainModule
  ],
  providers: [requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
