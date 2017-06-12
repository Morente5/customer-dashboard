import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'bmc-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

	@Input() public day: moment.Moment

	constructor() { }

	ngOnInit() {
	}

}
