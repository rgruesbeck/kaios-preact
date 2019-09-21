// import and load koji configs
import { h, render } from 'preact';
// import Koji from '@withkoji/vcc'

let root;
function init() {
	let App = require('./app').default;
	root = render(<App />, document.body, root);
}

init();