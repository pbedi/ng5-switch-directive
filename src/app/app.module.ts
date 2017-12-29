import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BetterHeighlightDirective } from './better-heighlight/better-heighlight.directive';
import { BetterHostbindingDirective } from './better-heighlight/better-hostbinding.directive';
import { UnlessDirective } from './better-heighlight/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterHeighlightDirective,
    BetterHostbindingDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
