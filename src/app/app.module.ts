import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CitationComponentComponent } from './citation-component/citation-component.component';
import { CitationListComponent } from './citation-list/citation-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { NewCitationComponent } from './new-citation/new-citation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SingleCitationComponent } from './single-citation/single-citation.component';
import { AuthInterceptor } from './intercepteurs/auth.intercepteur';
import { LogingComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { CitationAuteurComponent } from './citation-auteur/citation-auteur.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CitationComponentComponent,
    CitationListComponent,
    LangingPageComponent,
    NewCitationComponent,
    SingleCitationComponent,
    LogingComponent,
    RegisterComponentComponent,
    CitationAuteurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
