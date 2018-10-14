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

		let  contactObject = {};

		//	The field group that contains the contact details may have an array of contact details ('.contact-field')
		$fieldGroups.forEach(group => {
			let classNames = group.className().replace('field-group', '').trim();

			if(classNames === 'contact-number') {
				let $contacts = document.querySelectorAll('contact-group');

				if ($contacts.length !== 0){
					$contacts.forEach(contact => {
						let contactType = contact.attributes['data-contact-type'];
						let contactNumber = contact.querySelector('.contact-value').value;

						if(contactNumber !== undefined)
							contactObject[contactType] = contactNumber;
					});
				}
			}
		});
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
