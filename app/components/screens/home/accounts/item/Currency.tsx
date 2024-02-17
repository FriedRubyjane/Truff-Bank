import { FontAwesome } from '@expo/vector-icons'
import React, { FC } from 'react'
import { View } from 'react-native'
import { styles } from '../../../../../styles/accountItem'
import { TypeCurrency } from '../types'

const Currency: FC<{ currency: TypeCurrency }> = ({ currency }) => {
	return (
		<View style={styles.currencyCircle1}>
			<View style={styles.currencyCircle2}>
				<FontAwesome
					color='#488CF9'
					size={13}
					name={currency === 'RUB' ? 'ruble' : 'usd'}
				/>
			</View>
		</View>
	)
}

export default Currency
