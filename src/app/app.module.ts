import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAgendaComponent } from './list-agenda/list-agenda.component';
import { ListadoComponent } from './list-agenda/listado/listado.component';
import { MiniComponent } from './list-agenda/mini/mini.component';
import { ItemsComponent } from './list-agenda/listado/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAgendaComponent,
    ListadoComponent,
    MiniComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
