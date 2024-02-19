import { useEffect, useState } from 'react'
import { URL } from './API'
import { ICurrency } from './types'

export const useCurrencies = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [currencies, setCurrencies] = useState<ICurrency[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${URL}&currencies=USD%2CEUR%2CGBP&base_currency=RUB`
				)
				const result = await response.json()

				setCurrencies([
					{
						name: 'USD',
						value: (1 / result.data.USD).toFixed(2),
					},
					{
						name: 'EUR',
						value: (1 / result.data.EUR).toFixed(2),
					},
					{
						name: 'GBP',
						value: (1 / result.data.GBP).toFixed(2),
					},
				])
			} catch (error: any) {
				console.log('Ошибка получения валют:', error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return { currencies, isLoading }
}
