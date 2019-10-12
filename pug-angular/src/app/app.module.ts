import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervaltimerComponent } from './components/intervaltimer/intervaltimer.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { RandomErrorComponent } from './components/random-error/random-error.component';
import { ChessGameComponent } from './components/chess-game/chess-game.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervaltimerComponent,
    FromEventComponent,
    RandomErrorComponent,
    ChessGameComponent,
    MapFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
