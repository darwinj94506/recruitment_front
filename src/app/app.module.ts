import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/product/list/list.component';
import { CreateComponent } from './components/product/create/create.component';
import { UpdateComponent } from './components/product/update/update.component';
import { MainComponent } from './components/main/main.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    HttpClientModule ,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

