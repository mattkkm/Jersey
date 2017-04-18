import * as firebase from 'firebase';

export interface IJersey {
	//$key: string;
	completed: boolean;
	createdAt: any;
	title: string;
}
export class Jersey implements IJersey{
	//$key: string;
	completed: boolean = false;
	createdAt: any = firebase.database['ServerValue']['TIMESTAMP'];
	title: string;
	team: string;
	number: number;
	name: string;
	 price: number;
	 lat: number;
	 long: number;
	 userId: string;

	constructor(title: string, team: string, number: number, name: string, price: number, lat: number, long: number, userId: string){
		this.title = title;
		this.team = team;
		this.number = number;
		this.name = name;
		this.price = price;
		this.lat = lat;
		this.long = long;
		this.userId = userId;
	}
}