import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import {RouterModule, Routes} from '@angular/router';
import { FindJerseyComponent } from './find-jersey/find-jersey.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostJerseyComponent } from './post-jersey/post-jersey.component';

  export const config = {
    apiKey: "AIzaSyAmViLOgFcnfuNbdCSbH2eshwy0Xu907sI",
    authDomain: "bucks456-d91e2.firebaseapp.com",
    databaseURL: "https://bucks456-d91e2.firebaseio.com",
    storageBucket: "bucks456-d91e2.appspot.com",
    messagingSenderId: "575087516567"
  };


  export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
  export const appRoutes: Routes = [
    { path: 'findJersey', component: FindJerseyComponent},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'postJersey', component: PostJerseyComponent}
]
    
@NgModule({
  declarations: [
    AppComponent,
    FindJerseyComponent,
    DashboardComponent,
    PostJerseyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config, myFirebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyAmViLOgFcnfuNbdCSbH2eshwy0Xu907sI'}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
