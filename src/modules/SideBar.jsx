import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './SideBar.css';
import { withStyles } from '@material-ui/core/styles';
import todayicon from '../icons/today icon.svg';
import weeklyicon from '../icons/weekly icon.svg';
import monthlyicon from '../icons/monthly icon.svg';
import yearlyicon from '../icons/yearly icon.svg';


const styles = {
	view_button: {
		background: '#CBE0FF',
		borderRadius: '5 px',
		textAlign: 'left',
		width: 'calc(100% - 40px)',
	},

}


class SideBar extends Component {
	state = {}
	render() {
		const { view_button } = this.props.classes;
		return (			
			<div className="sidebar-bg">  
				<div className="hello"><h1>Hello, Alex!</h1></div>

				
				<div className="view-button-container">
				<Button className={ view_button }> <img src={todayicon}></img>&nbsp;&nbsp;Today</Button><br/><br/>
				<Button className={ view_button }> <img src={weeklyicon}></img>&nbsp;&nbsp;Weekly</Button><br/><br/>
				<Button className={ view_button }> <img src={monthlyicon}></img>&nbsp;&nbsp;Monthly</Button><br/><br/>
				<Button className={ view_button }> <img src={yearlyicon}></img>&nbsp;&nbsp;Yearly</Button><br/><br/>
				</div>

				<div className="mood-chart">
					<div className="title"><h3>Mood Chart</h3><br/></div>
					
					<div className="mood-sq-container">
						<div className="mood-happy mood-text"><p>Happy</p></div><br/>
						<div className="mood-neutral mood-text">Neutral</div><br/>
						<div className="mood-sad mood-text">Sad</div>

					</div>

				</div>
			</div>			
		);
	}
}

export default withStyles(styles)(SideBar);