import React from 'react';
import createReactClass from 'create-react-class';
import SetDisplay from 'SetDisplay';

const CardSet = createReactClass({
	render: function(){
		return(
			<div className='set-container'>
				<h1>Set</h1>
				<SetDisplay/>
			</div>
		);
	}
});

export default CardSet;