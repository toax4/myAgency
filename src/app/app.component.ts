import { Component } from '@angular/core';
import { green, red } from 'color-name';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'myAgency';

	sold = true;
	getSoldValue() {
		if(this.sold) {
			return "red";
		}

		return "green";
	}
}
