import React, { FC, Fragment } from 'react'
import { Text, View } from 'react-native'
import Loader from '../../../ui/Loader'
import Padding from '../../../ui/Padding'
import AccountItem from './item/AccountItem'
import { useAccounts } from './useAccounts'

const Accounts: FC = () => {
	const { accounts, isLoading } = useAccounts()

	return (
		<View style={{ margin: 'auto' }}>
			<Padding>
				{isLoading ? (
					<Loader />
				) : accounts.length ? (
					accounts.map((account, index) => (
						<Fragment key={account._id}>
							<AccountItem account={account} />
							{index + 1 !== accounts.length && (
								<View
									style={{
										borderBottomColor: '#E0E1E2',
										borderBottomWidth: 1,
										marginBottom: 24,
									}}
								></View>
							)}
						</Fragment>
					))
				) : (
					<Text>У вас нет карт</Text>
				)}
			</Padding>
		</View>
	)
}

export default Accounts
