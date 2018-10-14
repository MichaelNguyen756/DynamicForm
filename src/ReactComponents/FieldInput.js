import React from 'react';

export class FieldInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleRadioButtonSelection = this.handleRadioButtonSelection.bind(this);
	}

	handleRadioButtonSelection() {

	}

	handleGuardianConsentCheckBox() {

	}

	RenderRadioButtons(props) {
		return props.options.map(option => 
			<span key={option}>
				<input  type="radio" value={option}/>{option}
			</span>
		);
	}

	render() {
		return this.props.type === 'radio' ? (
			<span>
				{this.RenderRadioButtons(this.props)}
			</span>
		) :
		<input type={this.props.type}/>
	}
}