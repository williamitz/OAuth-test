import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services/storage.service';

import * as OAuth from '@zalando/oauth2-client-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-pe-virtual-classrooms';

  constructor( private st: StorageService ) {

  }

  ngOnInit() {
    this.onLoadOAuth2();
  }

  onLoadOAuth2() {

    let google = new OAuth.Provider({
      id: '3814493166253159050',   // required
      authorization_url: environment.oauthUrl, // required
    });

    let request = new OAuth.Request({
      client_id: '3814493166253159050',  // required
      redirect_uri: 'http://localhost:4200',
      metadata: {},
      response_type: 'JSON',
      scope: '',
      state: ''
    });


    let uri = google.requestToken(request);

    // Later we need to check if the response was expected
    // so save the request
    google.remember(request);

    if (this.st.token == '') {
      window.location.href = uri;
    }
    // Do the redirect
  }

}
