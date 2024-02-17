import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../../../styles/accountItem'
import { IAccount } from '../types'

const Balance: FC<{ account: IAccount }> = ({
	account: { balance, currency, cardName },
}) => {
	return (
		<View style={styles.balanceWrapper}>
			<Text style={styles.balanceFirstText}>{cardName}</Text>
			<Text style={styles.balanceSecondText}>
				{Intl.NumberFormat(undefined, {
					currency,
					style: 'currency',
				}).format(balance)}
			</Text>
		</View>
	)
}

export default Balance
