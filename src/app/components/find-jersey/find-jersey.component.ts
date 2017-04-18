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
  //jerseys: FirebaseListObservable<any[]>;
  //jerseys:any[];
	  constructor( public af: AngularFire, private _jerseyService: JerseyService) {
	   //this.jerseys = this.af.database.list('jerseys');
    //this.jerseys = _jerseyService.getJerseys();
   //this.jerseys.push( { id: 0, name: "Available" });

   // = [
   // { "id": 0, "name": "Available" },
   // { "id": 1, "name": "Ready" },
    //{ "id": 2, "name": "Started" }
    //];

		this.visible = true;
    this.gameVisible = false;		
		this.displayText = 'col-xs-6';



	  	this.form = {
	  		sideView: true
	 	};

	};

  ngOnInit() {
      //this.jerseys = this._jerseyService.getJerseys();

  };
    toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'col-xs-6' : 'col-xs-12';

  //  console.log(this.visible);
    //console.log(this.displayText);

  };
   toggleGameView() {
    this.gameVisible = !this.gameVisible;
   // this.gameText = this.gameVisible ? 'col-xs-6' : 'col-xs-12';

  };
   andSix(jersey){
      console.log(this._jerseyService.getJerseys());
    };
    createJersey(id: any) {
      //console.log(this._jerseyService.createJersey(id));
    //return this.jerseys$.push(new Jersey(id));
  };
    deleteJersey(id: any) {
    //console.log("id", id);
      console.log(this._jerseyService.deleteJersey(id));
    //return this.jerseys$.push(new Jersey(title));
  };
  rentJersey(key: string){
    let newJersey = this._jerseyService.getJerseyById(key);
    //console.log(this._jerseyService.getJerseyById(key));
    //console.log("rent jersey Done", newJersey);
  }


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