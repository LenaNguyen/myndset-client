import React, { Component } from 'react';
import './Calendar.css';
import CalendarGrid from './CalendarGrid';

class Calendar extends Component {
	state = {
		moods: []
	}
	formatMoods = (moods) => {
		const moodByDate = moods.reduce((acc, mood) => {
			if (!acc[mood.date]) {
				acc[mood.date] = mood;
			}
			return acc;
		}, {});
		this.setState({ moods: moodByDate });
	}

	componentDidMount() {
		const { moods } = this.props;
		this.formatMoods(moods);
	}

	render() {
		const { moods } = this.state;
		return (
			<div className="calendar-bg">
				<div className="month-title"><p>September</p></div>
				<CalendarGrid moods={moods} />
			</div>
		);
	}
}

export default Calendar;