const COLORS = {
	buttonBlue: '#2563eb',
	buttonBlueColor: ' rgb(255 255 255) ',
	buttonBlueGradiant: 'linear-gradient(180deg, #689FFF 18.75%, #367BF3 69.27%)',
	buttonBlack: '#1f2937',
	buttonBlackColor: 'rgb(209 213 219)',
	buttonBlackGradiant: 'linear-gradient(180deg, #374151 18.75%, #1f2937 69.27%)'
};

const sponsors = [
	{
		img: '/images/facebook.svg'
	},
	{
		img: '/images/tinder.svg'
	},
	{
		img: '/images/airbnb.svg'
	},
	{
		img: '/images/hubspot.svg'
	},
	{
		img: '/images/amazon.svg'
	}
];

const features = [
	{
		img: '/images/icon-square.svg',
		title: 'Ready for the future',
		text: 'A flexible foundation that evolves with complex ecosystem.'
	},
	{
		img: '/images/icon-brackets.svg',
		title: 'Ready for the future',
		text: 'A flexible foundation that evolves with complex ecosystem.'
	},
	{
		img: '/images/icon-check-list.svg',
		title: 'Ready for the future',
		text: 'A flexible foundation that evolves with complex ecosystem.'
	}
];

const cards = [
	{
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
