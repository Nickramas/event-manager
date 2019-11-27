import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guest } from '../interfaces/guest.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {

  public guestName: string;
  public guestBrings: string;
  public successMessage: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  public onButtonClicked() {
    if (!(this.guestName)) {
      this.successMessage = 'Naja, du musst wenigstens deinen namen eingeben.';
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const guest = {
      name: this.guestName,
      brings: this.guestBrings
    };

    console.log(JSON.stringify(guest));

    this.http.post<Guest>(environment.apiUrl + '/add-guest', JSON.stringify(guest), httpOptions).toPromise();

    this.successMessage = 'Du solltest jetzt eingetragen sein. Ich war zu faul um das noch zu checken.\nGuck einfach mal in der Gästeliste nach, ob du drin bist.';
  }
}
