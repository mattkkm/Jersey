import { Component, OnInit } from '@angular/core';
import {JerseyService} from '../../services/jersey.service';
import {AuthService} from '../../services/auth.service';
import {AngularFire,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myJerseys: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire, private auth: AuthService, private _jerseyService: JerseyService) { 
    	af.auth.subscribe(auth => {
	    	this.myJerseys = af.database.list('/jerseys',{
	    		query: {
	    			orderByChild: 'userId',
	    			equalTo: auth.uid
	    		}
	    	});
	    	this.myJerseys.subscribe(bucks=> {
	    		console.log("auther?", auth);
	    		console.log("berkarooongeroos", bucks);
	    	})
	    })
	 }

  ngOnInit() {
  }

}
