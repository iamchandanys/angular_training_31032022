import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ChildOneComponent } from './parent-one/child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOneComponent,
    ChildOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
