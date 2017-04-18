import { Component, OnInit } from '@angular/core';
import {Jersey} from '../../model/jersey';

import {AngularFire,FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { JerseyService } from '../../services/jersey.service';


@Component({
  selector: 'app-post-jersey',
  templateUrl: './post-jersey.component.html',
  providers: [JerseyService],
  styleUrls: ['./post-jersey.component.css']
})
export class PostJerseyComponent implements OnInit {
	jersey: {
	name:String,
	 title: String,
	 team: String,
	 long: number,
	 lat: number,
	 price: number,
	 userId: String,
	 number: number
	};
	jerseys: FirebaseListObservable<any[]>;

	  constructor( public af: AngularFire, private _jerseyService: JerseyService) {
	    	this.jerseys = this._jerseyService.getJerseys();
	    	//this.jersey = new Jersey("go pack jersey","perkers",4,"favors",45,55,33);
	    	this.jersey.name = "Rodgers";
	    	this.jersey.title = "Rodgers";
	    	this.jersey.team = "Rodgers";
	    	this.jersey.number =2;
	    	this.jersey.long = 3;
	    	this.jersey.lat =3;
	    	this.jersey.price = 3;
	    	this.jersey.userId="rodgers";
	    	//console.log(this.jersey);
	   };

	  ngOnInit() {
	  };

	  postJersey(jersey: Jersey){
	  	console.log("Postjersey, jersey",jersey);
	  	this._jerseyService.createJersey(jersey);
	  };

}