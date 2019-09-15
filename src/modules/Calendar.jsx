import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Calendar.css';
import CalendarGrid from './CalendarGrid';

class Calendar extends Component {
	state = {}
	render() {

		return (
			<div className="calendar-bg">
				<div className="month-title"><p>September</p></div>

				<CalendarGrid />

			</div>
		);
	}
}

export default Calendar;