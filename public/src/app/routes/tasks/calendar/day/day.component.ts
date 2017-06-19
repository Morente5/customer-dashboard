import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
	selector: 'bmc-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

	@Input() public day: moment.Moment

	public formGroup: FormGroup = new FormGroup({
		tasks: new FormArray([
			new FormControl()
		])
	});

	constructor() { }

	ngOnInit() {
		console.log(this.day.format('LL'))
		// console.log(this.formArray)
	}

}
