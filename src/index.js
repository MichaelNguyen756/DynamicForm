import React from 'react';
import ReactDOM from 'react-dom';
import { DynamicForm } from './ReactComponents/DynamicForm';
import { model } from './FormModel';

ReactDOM.render(
	<DynamicForm formStructure={model} />,
	document.getElementById('root')
);