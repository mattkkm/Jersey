import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import {IJersey, Jersey} from '../model/jersey';
import {AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable'; 
import { ReplaySubject } from 'rxjs/ReplaySubject';

//TODO - clear the authproviders here and add a separate authservice that i inject here

import { Component, OnInit } from '@angular/core';

@Injectable()
export class JerseyService {
  visibleJerseys$: Observable<IJersey[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredJerseys$: FirebaseListObservable<IJersey[]>;
  private jerseys$: FirebaseListObservable<IJersey[]>;
	
  jerseys: FirebaseListObservable<any[]>;

	constructor( public af: AngularFire, auth: AuthService) {
  const path = `/jerseys/${auth.id}`;

  this.jerseys$ = af.database.list(path);

  this.filteredJerseys$ = af.database.list(path, {query: { orderByChild: 'completed', equalTo: this.filter$}});

  this.visibleJerseys$ = this.filter$.switchMap(filter => filter === null ? this.jerseys$ : this.filteredJerseys$);

	   // this.jerseys = this.af.database.list('jerseys');
	};
  
  filterJerseys(filter: string): void {
    switch (filter) {
      case 'false':
        this.filter$.next(false);
        break;

      case 'true':
        this.filter$.next(true);
        break;

      default:
        this.filter$.next(null);
        break;
    }
};
createJersey(title: string): firebase.Promise<any> {
    return this.jerseys$.push(new Jersey(title));
  };

  removeJersey(jersey: IJersey): firebase.Promise<any> {
    return this.jerseys$.remove(jersey.$key);
  };

  updateJersey(jersey: IJersey, changes: any): firebase.Promise<any> {
    return this.jerseys$.update(jersey.$key, changes);
  };


  getJerseys(){
    console.log("this.jerseys", this.jerseys);
    this.jerseys = this.af.database.list('jerseys');
  	return this.jerseys;
  };
  getJerseyById(jerseyId){
    //setJerseys: any;
  //  setJerseys = this.getJerseys();

  };

  deleteJerseyById(){};
  editJersey(){};
  //createJersey(){};
  getJerseysByGame(){};
  rentJersey(){};


}