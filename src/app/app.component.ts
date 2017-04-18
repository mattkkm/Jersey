import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


import {AngularFire,FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedIn: boolean;
	constructor( public af: AngularFire, public auth: AuthService, private router: Router) {
	    this.af.auth.subscribe(auth => console.log(auth));
	}

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() =>{this.postSignIn(); this.isSignedIn = true;});
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => {this.postSignIn(); this.isSignedIn = true; console.log(this.isSignedIn); console.log(this.auth);});
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => {this.postSignIn(); this.isSignedIn = true;});
  }
   private postSignIn(): void {
    this.router.navigate(['/findJersey']);
  }
  private postSignOut(): void {
    this.router.navigate(['/postJersey']);
  }
  signOut(): void {
    this.af.auth.logout().then(() => {this.isSignedIn = false; console.log("bucks in 6");console.log(this.isSignedIn); this.postSignOut(); console.log(this.af.auth); console.log(this.auth);});
  }

  title = 'app works!';
}
