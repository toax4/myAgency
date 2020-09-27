import { Component } from '@angular/core';
import { green, red } from 'color-name';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'myAgency';

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
