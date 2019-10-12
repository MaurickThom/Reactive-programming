import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervaltimerComponent } from './components/intervaltimer/intervaltimer.component';
import { FromEventComponent } from './components/from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervaltimerComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
