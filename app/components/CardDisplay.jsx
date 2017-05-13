const React = require('react');

const CardDisplay = ({card, loadingGif}) => {
	return(
		<div className="card-display">
			<img src={card}/>
			<img className={loadingGif} src="http://www.khalilicollections.org/wp-content/themes/bateaux/ajax-loader.gif"/>
		</div>
	);
}

module.exports = CardDisplay;