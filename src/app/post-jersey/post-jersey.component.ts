import { Component, OnInit } from '@angular/core';

import {AngularFire,FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'app-post-jersey',
  templateUrl: './post-jersey.component.html',
  styleUrls: ['./post-jersey.component.css']
})
export class PostJerseyComponent implements OnInit {

	jerseys: FirebaseListObservable<any[]>;
	  constructor( public af: AngularFire) {
	    	this.jerseys = this.af.database.list('jerseys');
	 }
	  ngOnInit() {
	  }

	  postJersey(jersey){
	  //	this.jerseys.push(jersey);
	  	console.log("jersey", jersey);
	  	console.log("this.jerseys", this.jerseys);
	  }

}