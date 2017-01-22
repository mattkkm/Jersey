export interface IJersey {
	$key?: string;
	completed: boolean;
	createdAt: any;
	title: string;
}
export class Jersey implements IJersey{
	completed: boolean = false;
	createdAt: any = firebase.database['ServerValue']['TIMESTAMP'];
	title: string;

	constructor(title: string){
		this.title = title;
	}
}
