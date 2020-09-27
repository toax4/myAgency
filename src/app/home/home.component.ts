import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}


	proprerties = [
		{
			title: "Ma super maison",
			category: "Maison",
			sold: true
		},
		{
			title: "Petit appartement",
			category: "Appartement",
			sold: false
		},
		{
			title: "Belle villa",
			category: "Maison",
			sold: true
		},
	];


	sold = true;
	getSoldValue(index) {
		if(this.proprerties[index].sold) {
			return "red";
		}

		return "green";
	}
}
