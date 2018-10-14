import React from 'react';
import { FieldLabel } from './FieldLabel';
import { FieldInput } from './FieldInput';

export function FieldGroup(props) {
	return (
		<div className={`${props.fieldNameClass} field-group`}>
			<FieldLabel fieldName={props.fieldName}/>
			<FieldInput type={props.type} options={props.options} />
		</div>
	);
}