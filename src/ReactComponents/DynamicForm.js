import React from 'react';
import { FieldGroup } from './FieldGroup';

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

		let $fieldGroups = document.querySelectorAll('.field-group');

		
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