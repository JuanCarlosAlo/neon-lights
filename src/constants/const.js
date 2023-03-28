import { v4 } from 'uuid';

const COLORS = {
	buttonBlue: '#2563eb',
	buttonBlueColor: ' rgb(255 255 255) ',
	buttonBlueGradiant: 'linear-gradient(180deg, #689FFF 18.75%, #367BF3 69.27%)',
	buttonBlack: '#1f2937',
	buttonBlackColor: 'rgb(209 213 219)',
	buttonBlackGradiant:
		'linear-gradient(180deg, #374151 18.75%, #1f2937 69.27%)',
	gradientFromCard: '#2563eb',
	gradientToCard: '#a855f7',
	buttonPurpleGradiant:
		'linear-gradient(180deg, #a855f7 18.75%, #2563eb 69.27%)'
};

const sponsors = [
	{
		id: v4(),
		img: '/images/facebook.svg'
	},
	{
		id: v4(),
		img: '/images/tinder.svg'
	},
	{
		id: v4(),
		img: '/images/airbnb.svg'
	},
	{
		id: v4(),
		img: '/images/hubspot.svg'
	},
	{
		id: v4(),
		img: '/images/amazon.svg'
	}
];

const features = [
	{
		id: v4(),
		img: '/images/icon-square.svg',
		title: 'Ready for the future',
		text: 'A flexible foundation that evolves with complex ecosystem.'
	},
	{
		id: v4(),
		img: '/images/icon-brackets.svg',
		title: 'Ready for the future',
		text: 'A flexible foundation that evolves with complex ecosystem.'
	},
	{
		id: v4(),
		img: '/images/icon-check-list.svg',
		title: 'Ready for the future',
		text: 'A flexible foundation that evolves with complex ecosystem.'
	}
];

const cards = [
	{
		id: v4(),
		title: 'Starter',
		price: '49',
		text: 'For teams building apps for many public & private users.',
		featuringText: 'Features include:',
		checkedText: [
			'Unlimited placeholder texts',
			'Consectetur adipiscing elit',
			'Excepteur sint occaecat cupidatat',
			'Officia deserunt mollit anim'
		],
		bgColor: 'transparent',
		special: false
	},
	{
		id: v4(),
		title: 'Business',
		price: '79',
		text: 'For teams building apps for many public & private users.',
		featuringText: 'Everything in Starter, plus:',
		checkedText: [
			'Consectetur adipiscing elit',
			'Consectetur adipiscing elit',
			'Excepteur sint occaecat cupidatat',
			'Officia deserunt mollit anim',
			'Excepteur sint occaecat cupidatat',
			'Officia deserunt mollit anim'
		],
		bgColor: 'rgb(31 41 55)',
		special: true
	},
	{
		id: v4(),
		title: 'Enterprise',
		price: '129',
		text: 'For teams building apps for many public & private users.',
		featuringText: 'Everything in Business, plus:',
		checkedText: [
			'Unlimited placeholder texts',
			'Consectetur adipiscing elit',
			'Excepteur sint occaecat cupidatat',
			'Officia deserunt mollit anim'
		],
		bgColor: 'transparent',
		special: false
	}
];

export { COLORS, sponsors, features, cards };
