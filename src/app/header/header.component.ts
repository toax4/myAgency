import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	title = "Bobo Agency";
	isDisabled = true;

	constructor() { }

	ngOnInit(): void {
	}

	onClick() {
		this.isDisabled = !this.isDisabled
	}
}
