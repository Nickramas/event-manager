import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { GuestlistComponent } from './guestlist/guestlist.component';
import { AddGuestComponent } from './add-guest/add-guest.component';


const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'guestlist', component: GuestlistComponent },
  { path: 'enter', component: AddGuestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
