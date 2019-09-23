import { h, Component } from 'preact';
import { hover } from '../animations';

class Banner extends Component {
	state = {
		clicked: 0
    };

	handleClick() {
        this.setState({ clicked: this.state.clicked + 1 })

		// example animation
		hover(this.node, () => {
			console.log('done hovering', this.node)
		}).play();
	}

	render() {
		return (
			<div ref={el => this.node = el} style={this.style} onClick={() => this.handleClick()}>
                {this.props.text} {this.state.clicked}
			</div>
		)
	}
}

export default Banner;