import React from 'react';

export class DynamicForm extends React.Component {
	constructor(props) {
		super(props);
		this.formStructure = props.formStructure;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	RenderFormStructure(formStructure) {
		return formStructure.map(formGroup => 
			<FieldGroup 
				key={formGroup.fieldName}
				fieldName={formGroup.fieldName}
				fieldNameClass={formGroup.fieldNameClass}
				type={formGroup.type}
				options={formGroup.options}
			/>
		);
	}

	handleSubmit(event) {
		//Handle and output JSON data
		event.preventDefault();
	}

	render() {
		return (
			<div id="fields">
				{ this.RenderFormStructure(this.formStructure) }
				<button type="button" onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}

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

export function FieldLabel(props) {
	return (
		<label>
			{props.fieldName}
		</label>
	);
}

export function FieldGroup(props) {
	return (
		<div className={`${props.fieldNameClass} field-group`}>
			<FieldLabel fieldName={props.fieldName}/>
			<FieldInput type={props.type} options={props.options} />
		</div>
	);
}