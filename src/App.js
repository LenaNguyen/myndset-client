import React, { Component } from 'react';
import axios from 'axios'
import SideBar from './modules/SideBar';
import Calendar from './modules/Calendar';
import './App.css';

class App extends Component {
	state = {
		loading: true
	}

	componentDidMount() {
		axios.get('https://desolate-escarpment-53509.herokuapp.com/api/moods')
			.then(response => {
				this.setState({ moods: response.data, loading: false })
			})
	}

	render() {
		const { loading, moods } = this.state;
		return (
			<div className="App">
				<SideBar />
				{loading ? <div>LOADING</div> : <Calendar moods={moods} />}
			</div>
		);
	}
}

export default App;
