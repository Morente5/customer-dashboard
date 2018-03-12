import { Component, OnInit } from '@angular/core';

import { Moment } from 'moment';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
	selector: 'bmc-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	public today: Moment

	constructor() { }

	ngOnInit() {
		this.today = moment().startOf('day')
	}

}
