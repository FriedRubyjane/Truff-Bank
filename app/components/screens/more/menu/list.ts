import { IMoreItem } from './types'

const startUrl = 'https://www.tinkoff.ru'

export const menu: IMoreItem[] = [
	{
		title: 'Банкоматы',
		description: 'Поиск банкоматов Тинькофф и других банков на карте.',
		iconName: 'account-balance',
		link: `${startUrl}/maps/atm/`,
	},
	{
		title: 'Пополнения',
		description: 'Пополнение наличными в рублях, долларах, евро.',
		iconName: 'credit-card',
		link: `${startUrl}/maps/payment/`,
	},
	{
		title: 'Банковская справка',
		description: 'Выписки со счета по электронной почте и в бумажном виде.',
		iconName: 'find-in-page',
		link: `${startUrl}/cards/debit-cards/tinkoff-black/help/get-statement/reference/`,
	},
	{
		title: 'Для бизнеса',
		description: 'Интернет-банкинг для малого бизнеса.',
		iconName: 'business',
		link: `${startUrl}/business/`,
	},
	{
		title: 'Контакты',
		description:
			'По электронной почте и в социальных сетях, звоните через Интернет и по телефону.',
		iconName: 'chat-bubble',
		link: `${startUrl}/contacts/`,
	},
]
