import { NgModule } from '@angular/core';
import { AddGuestComponent } from './add-guest.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AddGuestComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    AddGuestComponent,
  ]
})
export class AddGuestModule {}
