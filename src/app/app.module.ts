import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as jquery from '../assets/js/jquery.min.js';
import { SharedModule } from './shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
