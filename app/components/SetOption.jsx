import React from 'react';
import createReactClass from 'create-react-class';

const SetOption = createReactClass({
	onClickSet: function(setName, e){
		console.log(arguments);
		e.preventDefault();
		this.props.onGetSet(setName);
	},

	render: function(){
		return (
			<div>
				<ul id='set-list'>
					<li><button onClick={this.onClickSet.bind(this, "Basic")}>Basic</button></li>
					<li><button onClick={this.onClickSet.bind(this, "Classic")}>Classic</button></li>
					<li><button onClick={this.onClickSet.bind(this, "Whispers of the Old Gods")}>Old Gods</button></li>
					<li><button onClick={this.onClickSet.bind(this, "One Night in Karazhan")}>Karazhan</button></li>
					<li><button onClick={this.onClickSet.bind(this, "Mean Streets of Gadgetzan")}>Gadgetsan</button></li>
					<li><button onClick={this.onClickSet.bind(this, "Journey to Un'Goro")}>Un'Goro</button></li>
				</ul>
			</div>
		);			
	}	
});

export default SetOption;