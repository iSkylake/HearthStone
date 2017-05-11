const React = require('react');

const CardDisplay = ({card}) => {
	return(
		<div className="card-display">
			<img src={card}/>
			{/*<img className="loading-gif" src="https://bottlevoice.com/ja/images/loading256.gif"/>*/}
		</div>
	);
}

module.exports = CardDisplay;