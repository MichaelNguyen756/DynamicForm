import React from 'react';
import ReactDOM from 'react-dom';
import { DynamicForm } from './DynamicForm';
import { model } from './FormModel';

ReactDOM.render(
	<DynamicForm formStructure={model} />,
	document.getElementById('root')
);