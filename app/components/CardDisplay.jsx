import React from 'react';
import loadAni from "../../public/img/ajax-loader.gif";

const CardDisplay = ({card, loadingGif}) => {
	return(
		<div className="card-display">
			<img src={card}/>
			<img className={loadingGif} src={loadAni}/>
		</div>
	);
}

export default CardDisplay;