import { h, Component } from 'preact';
// import a from './components/a';

export default class App extends Component {
	componentDidMount() {
		this.state = {}
	}

	render() {
		let { name } = this.props.config.settings
		return (
			<div>{name}</div>
		)
	}
}