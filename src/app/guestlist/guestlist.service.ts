import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Guest } from '../interfaces/guest.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestlistService {

  constructor(private http: HttpClient) { }

  getGuestlist(): Observable<Guest[]> {
    return this.http.get<Guest[]>(environment.apiUrl + '/guestlist');
  }
}
