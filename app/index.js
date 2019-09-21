import { h, Component } from 'preact';
// import GameContainer from './GameContainer';

export default class App extends Component {
	componentDidMount() {
		this.state = {
			name: 'name'
		};
	}

	render() {
		return (
			<div>
				Hello Kai
			</div>
		)
	}
}