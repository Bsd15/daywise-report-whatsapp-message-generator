import React from 'react';
import PropTypes from 'prop-types';
import { FormField, TextInput, TextArea } from 'grommet';

const Input = (props) => {
	let input = null;
	switch (props.type) {
		case 'number':
			input = (
				<FormField
					label={props.label}
					name={props.name}
					pad
					required={props.required}
				>
					<TextInput name={props.name} type="number" />
				</FormField>
			);
			break;
		case 'text-area':
			input = (
				<FormField
					label={props.label}
					name={props.name}
					required={props.required}
				>
					<TextArea name={props.name} />
				</FormField>
			);
			break;
		case 'input':
			input = (
				<FormField
					label={props.label}
					name={props.name}
					required={props.required}
				>
					<TextInput name={props.name} />
				</FormField>
			);
			break;
		case 'date':
			input = (
				<FormField
					label={props.label}
					name={props.name}
					required={props.required}
				>
					<TextInput name={props.name} type="date" />
				</FormField>
			);
			break;
		case 'time':
			input = (
				<FormField
					label={props.label}
					name={props.name}
					required={props.required}
				>
					<TextInput name={props.name} type="time" />
				</FormField>
			);
			break;
		default:
			input = null;
			break;
	}
	return input;
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	required: PropTypes.bool,
};

Input.defaultProps = {
	min: 1,
	required: false,
};

export default Input;
