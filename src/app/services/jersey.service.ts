import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import {AngularFire,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
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
   jerseys$: FirebaseListObservable<any[]>;
	
  jerseyRecords: FirebaseListObservable<any[]>;
  jerseys: FirebaseListObservable<any[]>;
  jerseys1: FirebaseListObservable<any[]>;

	constructor( public af: AngularFire, public auth: AuthService) {
  const path = `/jerseys/${auth.id}`;

  this.jerseys$ = af.database.list(path);

  this.filteredJerseys$ = af.database.list(path, {query: { orderByChild: 'completed', equalTo: this.filter$}});

  this.visibleJerseys$ = this.filter$.switchMap(filter => filter === null ? this.jerseys$ : this.filteredJerseys$);

	  this.jerseys = this.af.database.list('jerseys');
    this.jerseyRecords = this.af.database.list('jerseyRecords');
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
getJerseys(){
      this.af.auth.subscribe(auth => {
         const path = `/jerseys/${this.auth.id}`;

          this.jerseys$ = this.af.database.list(path, {preserveSnapshot: true});
         // console.log("path", path);
          //console.log("thios.auth.id", this.auth.id);
          this.jerseys$.subscribe(berks => {
            berks.forEach(berk => {
           //   console.log('berrrrks', berk.key)
              //console.log('berrrks value ', berk.val())
            });
          })
      });

  //this.filteredJerseys$ = af.database.list(path, {query: { orderByChild: 'completed', equalTo: this.filter$}});

  this.jerseys1 = this.af.database.list('jerseys', { preserveSnapshot: true });
    this.jerseys1
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
         //console.log(snapshot.key)
          //console.log(snapshot.val())
        });
      })

    //delete everything above?
    this.jerseys = this.af.database.list('jerseys');
  return this.jerseys;
}
getJerseyById(id: string): Jersey{
  let findJersey: Jersey;
let findJersey1: Jersey;
  let pathFind: string;
  pathFind = 'jerseys' + id;
  this.jerseys = this.af.database.list('jerseys');
  this.jerseys = this.af.database.list('jerseys', { preserveSnapshot: true });
    this.jerseys
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          if(id===snapshot.key){
            findJersey = <Jersey>snapshot;
           // console.log("quietmooseXXX");
            //console.log(snapshot.key);
            //console.log("findJersey", findJersey); 
          };
        });
      });
   // console.log("this.jerseys!!!!!!!!!!!!!!!!!!1", this.jerseys);
    //  console.log("findjersey1XXXXXXXXXXXXXXXXXXXXXX", findJersey1);
    return findJersey1;
}
createJersey(newJersey: Jersey){
  // should be able to just this.jerseys.push(newJersey).then(key => console.log("bucks"))
        this.af.auth.subscribe(auth => {
          this.jerseys.push(new Jersey(
          newJersey.title,
          newJersey.team,
          newJersey.number,
          newJersey.name,
          newJersey.price,
          newJersey.lat,
          newJersey.long,
          auth.uid
        )).then( key => {
                  console.log("key", key)
                  console.log("bucks", auth)
                  }
        );
        });

   // console.log("jerseyService.create, newJersey", newJersey);


};
createAcceptedJersey(jerseyId: string){
  this.jerseyRecords = this.af.database.list('jerseyRecords');

};
updateJersey(key: string, newText: string){
  this.jerseys.update(key, {text:newText});
};
deleteJersey(key:string){
  this.jerseys.remove(key);
};

}