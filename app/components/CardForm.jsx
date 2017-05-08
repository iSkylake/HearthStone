const React = require('react');
const createReactClass = require('create-react-class');

const CardFrom = createReactClass({
	render: function(){
		return (
			<form>
				<input type="text" placeholder="Card Name"/>
				<button>Get Card</button>
			</form>
		);
	}
});

module.exports = CardFrom;