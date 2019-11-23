import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuestlistComponent } from './guestlist.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    GuestlistComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    GuestlistComponent
  ]
})
export class GuestlistModule {}
