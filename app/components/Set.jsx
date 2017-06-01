import React from 'react';
import createReactClass from 'create-react-class';
import SetDisplay from 'SetDisplay';
import SetOption from 'SetOption';

const CardSet = createReactClass({
	render: function(){
		return(
			<div className='set-container'>
				<h1>Card Set</h1>
				<SetOption/>
				<SetDisplay/>
			</div>
		);
	}
});

export default CardSet;