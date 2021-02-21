import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redirecting..';

  apiURL = '';

  ngOnInit() {
    this.apiURL = environment.API_URL;
    console.log("redirect URL: ", this.apiURL)
    window.location.href = this.apiURL;
  }
}
