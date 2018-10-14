export let model = [
	{
		fieldName: 'Name',
		fieldNameClass: "name",
		type: 'text',
		required: true
	},
	{
		fieldName: 'Date of Birth',
		fieldNameClass: "dob",
		type: 'date',
		required: true
	},
	{
		fieldName: 'Gender',
		fieldNameClass: "gender",
		type: 'radio',
		options: [
			"Male",
			"Female",
			"Other"
		],
		required: false
	},
	{
		fieldName: 'Contact Number',
		fieldNameClass: "contact-number",
		type: 'text',
		required: false
	},
	{
		fieldName: 'Required Guardian Consent',
		fieldNameClass: "consent-check",
		type: 'checkbox',
		required: false
	}	
]