import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {JerseyService} from '../../services/jersey.service';
import {IJersey, Jersey} from '../../model/jersey';
import 'rxjs/add/operator/switchMap';
import {AngularFire,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	jersey: FirebaseObjectObservable<any>;
	jerseyKey: string;
  constructor(private af: AngularFire, private _jerseyService: JerseyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	 	this.route.params
    .map(params => {
      return params['key'];
    })
    .subscribe(key => {
      let purple: string;
      purple = 'jerseys/' + key;
      this.jersey = this.af.database.object(purple);
      console.log("this.jerseyxxxx purple ", this.jersey);
    });

    //this.jerseyKey = params['key']);

		//this._jerseyService.getJerseyById(this.jerseyKey).subscribe((jersey: Jersey) => this.jersey = jersey);
		//console.log("this.jerseyXXXX", this.jersey);
  }

}
