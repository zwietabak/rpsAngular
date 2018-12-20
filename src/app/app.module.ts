import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PlayPanelComponent } from './play-panel/play-panel.component';
import { FormsModule } from '@angular/forms';
import { StatusPanelComponent } from './status-panel/status-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    PlayPanelComponent,
    StatusPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
