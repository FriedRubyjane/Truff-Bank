import React, { FC } from 'react'
import { Alert, View } from 'react-native'
import Button from '../../../ui/Button'
import { asyncAlert } from './asyncAlert'

const ApplyNewProduct: FC = () => {
	const registerHandler = async () => {
		try {
			const currency = await asyncAlert({
				title: 'Валюта',
				message: 'Выберите валюту',
				buttons: {
					text: 'RUB',
					resolveValue: 'RUB',
					textSecond: 'USD',
					resolveValueSecond: 'USD',
				},
			})

			console.log('Currency: ', currency)
		} catch (error: any) {
			Alert.alert('Ошибка заказа', error)
		}
	}

	return (
		<View
			style={{
				width: '100%',
				maxWidth: 352.5,
				margin: 'auto',
				marginTop: 24,
				paddingRight: 16,
				paddingLeft: 16,
			}}
		>
			<Button onPress={registerHandler} title='Заказать новую карту' />
		</View>
	)
}

export default ApplyNewProduct
