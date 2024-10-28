import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CarrouselComponent } from './components/carousel/carrousel.component';
import { ALnkComponent } from './components/link/a-link.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { OficinaComponent } from './pages/oficina/oficina.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ALnkComponent,
    CarrouselComponent,
    ContatoComponent,
    OficinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
