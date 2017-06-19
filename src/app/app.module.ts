import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DraggableBoxAfterComponent} from './draggable-box-after/draggable-box-after.component';
import {DraggableBoxBeforeComponent} from './draggable-box-before/draggable-box-before.component';
import {LoadingComponent} from './loading/loading.component';
import { BoxComponent } from './draggable-box-before/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    DraggableBoxBeforeComponent,
    DraggableBoxAfterComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
