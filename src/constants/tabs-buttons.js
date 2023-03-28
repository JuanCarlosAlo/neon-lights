import { v4 } from 'uuid';

const tabsButtons = [
	{
		id: v4(),
		text: 'For Developers'
	},
	{
		id: v4(),
		text: 'For Designers'
	},
	{
		id: v4(),
		text: 'For Founders'
	},
	{
		id: v4(),
		text: 'For Markers'
	}
];

const tabsContent = [
	{
		id: v4(),
		text: 'For Developers',
		cards: [
			{
				id: v4(),
				img: '/images/telegram.svg',
				text: 'Neon Telegram'
			},
			{
				id: v4(),
				img: '/images/github.svg',
				text: 'Neon GitHub'
			},
			{
				id: v4(),
				img: '/images/docs.svg',
				text: 'Neon Docs'
			},
			{
				id: v4(),
				img: '/images/youtube.svg',
				text: 'Neon Tutorials'
			}
		]
	},
	{
		id: v4(),
		text: 'For Designers',
		cards: [
			{
				id: v4(),
				img: '/images/discord.svg',
				text: 'Neon Discord'
			},
			{
				id: v4(),
				img: '/images/medium.svg',
				text: 'Neon Medium'
			},
			{
				id: v4(),
				img: '/images/docs.svg',
				text: 'Neon Docs'
			},
			{
				id: v4(),
				img: '/images/youtube.svg',
				text: 'Neon Tutorials'
			}
		]
	},
	{
		id: v4(),
		text: 'For Founders',
		cards: [
			{
				id: v4(),
				img: '/images/telegram.svg',
				text: 'Neon Telegram'
			},
			{
				id: v4(),
				img: '/images/discord.svg',
				text: 'Neon Discord'
			},
			{
				id: v4(),
				img: '/images/medium.svg',
				text: 'Neon Medium'
			},
			{
				id: v4(),
				img: '/images/docs.svg',
				text: 'Neon Docs'
			}
		]
	},
	{
		id: v4(),
		text: 'For Markers',
		cards: [
			{
				id: v4(),
				img: '/images/telegram.svg',
				text: 'Neon Telegram'
			},
			{
				id: v4(),
				img: '/images/medium.svg',
				text: 'Neon Medium'
			},
			{
				id: v4(),
				img: '/images/github.svg',
				text: 'Neon GitHub'
			},
			{
				id: v4(),
				img: '/images/youtube.svg',
				text: 'Neon Tutorials'
			}
		]
	}
];

export { tabsButtons, tabsContent };
