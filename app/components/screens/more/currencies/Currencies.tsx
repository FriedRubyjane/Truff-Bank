import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { BOX_SHADOW } from '../../../../styles'
import { styles } from '../../../../styles/currencies'
import Loader from '../../../ui/Loader'
import { useCurrencies } from './useCurrencies'

const Currencies: FC = () => {
	const { currencies, isLoading } = useCurrencies()

	return (
		<View style={{ ...styles.wrapper, ...BOX_SHADOW }}>
			{isLoading ? (
				<Loader />
			) : (
				currencies.map(currency => (
					<View style={styles.currencyItem} key={currency.name}>
						<Text style={styles.textName}>{currency.name}</Text>
						<Text style={styles.textCurrency}>{currency.value}</Text>
					</View>
				))
			)}
		</View>
	)
}

export default Currencies
