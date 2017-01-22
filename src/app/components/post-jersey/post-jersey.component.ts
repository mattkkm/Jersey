import { Component, OnInit } from '@angular/core';

import {AngularFire,FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { JerseyService } from '../../services/jersey.service';


@Component({
  selector: 'app-post-jersey',
  templateUrl: './post-jersey.component.html',
  providers: [JerseyService],
  styleUrls: ['./post-jersey.component.css']
})
export class PostJerseyComponent implements OnInit {
	jersey: any;
	jerseys: FirebaseListObservable<any[]>;

	  constructor( public af: AngularFire, private _jerseyService: JerseyService) {
	    	//this.jerseys = this.af.database.list('jerseys');
	    	this.jerseys = this._jerseyService.getJerseys();

	    	this.jersey = {
	    		team: "packers",
	    		number: 4,
	    		name: "favors",
	    		price: 12,
	    		lat: 12,
	    		long: 12,
	    		label: "go berks"
	    	};
	   };

	  ngOnInit() {
	  };

	  postJersey(jersey){
	  	this.jerseys.push(jersey);
	  	console.log("jersey", this.jersey);
	  	console.log("this.jerseys", this.jerseys);
	  };

}
    interface jersey {
  	team: string;
	number: number;
	name: string;
	price:number;
	lat: number;
	long: number;
	label: string;
	}