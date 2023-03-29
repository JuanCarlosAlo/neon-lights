import { v4 } from 'uuid';

const footer = [
	{
		id: v4(),
		title: 'PRODUCTS',
		items: ['Neon Manage', 'Neon Analyse', 'Neon Launch', 'Experimentation']
	},
	{
		id: v4(),
		title: 'RESOURCES',
		items: ['Blog', 'Cheat Sheet', 'Channel Partners', 'Affiliate Program']
	},
	{
		id: v4(),
		title: 'COMPARE',
		items: [
			'Session Recording',
			'Feature Flags',
			'Heatmaps',
			'Correlation Analysis'
		]
	},
	{
		id: v4(),
		title: 'COMPANY',
		items: ['About Us', 'Our Story', 'Work With Us']
	}
];

export { footer };
