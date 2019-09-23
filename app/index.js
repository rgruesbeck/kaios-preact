import { h, Component } from 'preact';
import Banner from './components/banner';

export default class App extends Component {
	state = {}

	componentDidMount() {
		console.log('component mounted')
	}

	render() {
		let { name } = this.props.config.settings
		return (
			<div>
				<Banner text={name}/>
			</div>
		)
	}
}