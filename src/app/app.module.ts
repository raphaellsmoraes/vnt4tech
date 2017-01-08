import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LampComponent } from './lamp/lamp.component';
import { SwitchComponent } from './switch/switch.component';
import { SwitchService } from './shared/switch.service';

@NgModule({
  declarations: [
    AppComponent,
    LampComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
