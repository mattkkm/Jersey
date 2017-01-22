import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {AngularFire,FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import {JerseyService} from '../../services/jersey.service';

@Component({
  selector: 'app-find-jersey',
  templateUrl: './find-jersey.component.html',
  styleUrls: ['./find-jersey.component.css']
})
export class FindJerseyComponent implements OnInit {
  visible: boolean;
  gameVisible: boolean;
	displayText: string;
	form: {sideView: boolean};
  jersey: any;
jerseys: FirebaseListObservable<any[]>;

	  constructor( public af: AngularFire, private _jerseyService: JerseyService) {
	   //this.jerseys = this.af.database.list('jerseys');
    this.jerseys = _jerseyService.getJerseys();
		this.visible = true;
    this.gameVisible = false;		
		this.displayText = 'col-xs-6';

	  	this.form = {
	  		sideView: true
	 	};

	};

  ngOnInit() {

  //bucks
 // console.log(this.jerseys);
 // console.log(jersey);
  }

    toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'col-xs-6' : 'col-xs-12';

    console.log(this.visible);
    console.log(this.displayText);

  };
   toggleGameView() {
    this.gameVisible = !this.gameVisible;
   // this.gameText = this.gameVisible ? 'col-xs-6' : 'col-xs-12';

  };
   andSix(jersey){
      console.log(this._jerseyService.getJerseys());
    };
    createJersey(title: string) {
      console.log(this._jerseyService.createJersey(title));
    //return this.jerseys$.push(new Jersey(title));
  };

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