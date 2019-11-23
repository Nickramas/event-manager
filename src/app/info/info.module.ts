import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  exports: [
    InfoComponent
  ]
})
export class InfoModule {}