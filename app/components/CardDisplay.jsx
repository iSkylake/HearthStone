const React = require('react');

const CardDisplay = ({card, loadingGif}) => {
	return(
		<div className="card-display">
			<img src={card}/>
			<img className={loadingGif} src={require("../../public/img/ajax-loader.gif")}/>
		</div>
	);
}

module.exports = CardDisplay;