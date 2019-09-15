import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Calendar.css';

class Calendar extends Component {
	state = {}
	render() {

		return (			
			<div className="calendar-bg">  
				<div className="month-title"><p>September</p></div>

				<div className="dates-container">
                    <div className="date-sq"></div>
                    <div className="date-sq"></div>
                    <div className="date-sq"></div>
                </div>
                    
			</div>			
		);
	}
}

export default Calendar;