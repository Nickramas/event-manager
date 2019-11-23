import { Component, OnInit } from '@angular/core';
import { GuestlistService } from './guestlist.service';
import { Guest } from '../interfaces/guest.interface';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.scss']
})
export class GuestlistComponent implements OnInit {

  constructor(private readonly guestlistService: GuestlistService) { 
    this.getGuestlist();
  }

  public guestlist: Guest[] = [];

  ngOnInit() {
  }

  getGuestlist(): void {
    this.guestlistService.getGuestlist().subscribe((guestlist: Guest[]) => {
      this.guestlist = guestlist;
    })
  }

}
