import React from 'react';
import createReactClass from 'create-react-class';
import SetDisplay from 'SetDisplay';
import SetOption from 'SetOption';
import HearthstoneApiRequest from 'HearthstoneAPI';

const CardSet = createReactClass({
	render: function(){
		HearthstoneApiRequest.getSet();
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