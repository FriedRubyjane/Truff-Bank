export type TypeCurrency = 'RUB' | 'USD'
export type TypeCardName = 'Truff Black' | 'Truff All Airlines'

export interface IAccount {
	_id: string
	userId: string
	cardName: TypeCardName
	balance: number
	cardNumber: string
	currency: TypeCurrency
}
