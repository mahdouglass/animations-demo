import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChangeSizeAnimationComponent } from './change-size-animation/change-size-animation.component';
import { HoverAnimationDemoComponent } from './hover-animation-demo/hover-animation-demo.component';
import { ColorAnimationDemoComponent } from './color-animation-demo/color-animation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeSizeAnimationComponent,
    HoverAnimationDemoComponent,
    ColorAnimationDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
