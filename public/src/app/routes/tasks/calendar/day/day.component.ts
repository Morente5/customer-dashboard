import { Component, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Moment } from 'moment';

@Component({
	selector: 'bmc-day',
	templateUrl: './day.component.html',
	styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnChanges {

	@Input() public day: Moment


	public formGroup: FormGroup

	constructor() {
		this.formGroup = new FormGroup({
			tasks: new FormArray([
				new FormControl()
			])
		});
	}

	ngOnChanges() {
		this.check()
	}

	check() {

	}

}
