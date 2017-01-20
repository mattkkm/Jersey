import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-find-jersey',
  templateUrl: './find-jersey.component.html',
  styleUrls: ['./find-jersey.component.css']
})
export class FindJerseyComponent implements OnInit {
	visible: boolean;
	displayText: string;
	form: {sideView: boolean};

	constructor(private http: Http){
		this.visible = true;		
		this.displayText = 'col-xs-6';

	  	this.form = {
	  		sideView: true
	 	};

	};

	


  ngOnInit() {

  //bucks
  console.log(this.jerseys[0].lat);
 // console.log(jersey);
  }

    toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'col-xs-6' : 'col-xs-12';

    console.log(this.visible);
    console.log(this.displayText);

  };

	jerseys: jersey[] = [
	{team:'packers',
	number: 12,
	name: 'Rodgers',
	price: 50,
	lat: 44.4908,
	long: -88.0473,
	label: 'go bucks'
	},
	{team:'packers',
	number: 12,
	name: 'Rodgers',
	price:50,
	lat: 44.5008,
	long: -88.0573,
	label: 'purple squirrel'
	},
	{
	team:'packers',
	number: 12,
	name: 'Rodgers',
	price:50,
	lat: 42.5108,
	long: -88.0673,
	label: 'skwahd'
	},
	{
	team:'deers',
	number: 34,
	name: 'Greek',
	price:50,
	lat: 42.4108,
	long: -88.0673,
	label: 'skwahd'
	},
	{
	team:'packers',
	number: 12,
	name: 'Rodgers',
	price:50,
	lat: 42.6108,
	long: -88.0673,
	label: 'skwahd'
	}
	];

  markers: marker[] = [
  	{
  		lat:44.5008,
  		long: -88.0473,
  		label: 'cunt'
  	},
  	{
  		lat:44.5008,
  		long: -88.1473,
  		label: 'cunt'
  	}
  ];

}
  interface marker {
  	lat: number;
  	long: number;
  	label?: string;
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
  interface form {
  	sideview: boolean;
  }