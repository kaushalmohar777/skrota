import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from './api-service.service';
// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjphnR0HMqFj8dfxmG5Pa8kCUOg6aeqts'
    }), */
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
