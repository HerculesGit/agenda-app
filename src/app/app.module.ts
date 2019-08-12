import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { DialogComponent } from './components/modal-dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
