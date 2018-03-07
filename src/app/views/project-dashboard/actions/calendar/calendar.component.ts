import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import 'moment/locale/es';

/**
 * Calendar component
 *
 * Generates a full view of days in current month
 */
@Component({
	selector: 'bmc-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	/**
	 * Respresents a day timestamp
	 * @type Moment
	 */
	public today: Moment
	public month: Moment[] = []
	public weeks: Moment[][] = []

	constructor() { }

	ngOnInit() {
		this.today = moment().startOf('day')
		this.month = this.getMonth(this.today)
		this.weeks = this.splitWeek(this.getFullWeekMonth(this.today))

		console.log(this.weeks)
	}

	/**
	 * @type Moment
	 * Generates a full view of days in current month
	 * @return fg
	 */
	getMonth(day: Moment): Moment[] {
		const result: Moment[] = []

		const date: Moment = day
			.clone()  // Makes a copy
			.startOf('month')  // Sets date to start of a month

		while (date.month() === day.month()) {
			result.push(date.clone())
			date.add(1, 'day')
		}

		return result
	}

	getFullWeekMonth(day: Moment): Moment[] {
		const result: Moment[] = []

		const date: Moment = day
			.clone()  // Makes a copy
			.startOf('month')  // Sets date to start of a month
			.startOf('week')  // Sets date to the first day of the week
		// console.log(date)

		while (date.month() <= day.month() || !date.isSame(date.clone().startOf('week'))) {
			result.push(date.clone())
			date.add(1, 'day')
		}

		return result
	}

	splitWeek(month: Moment[]): Moment[][] {
		const result: Moment[][] = []
		while (month.length) {
			result.push(month.splice(0, 7))
		}
		return result
	}

}
