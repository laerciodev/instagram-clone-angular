import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-clone-angular';

  ngOnInit() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyC-gCSFuPAcjCwFP4wZfs6lbLik0j68ovs',
      authDomain: 'instagram-clone-angular-accb3.firebaseapp.com',
      databaseURL: 'https://instagram-clone-angular-accb3.firebaseio.com',
      projectId: 'instagram-clone-angular-accb3',
      storageBucket: 'instagram-clone-angular-accb3.appspot.com',
      messagingSenderId: '206512343242',
      appId: '1:206512343242:web:94a26614520e7f7146cc33',
      measurementId: 'G-4K0M0V37H2'
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
