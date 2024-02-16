import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { IAccount } from '../types'

const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
	return (
		<View>
			<Text>AccountItem</Text>
		</View>
	)
}

export default AccountItem
