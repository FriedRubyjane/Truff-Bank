import React, { FC } from 'react'
import { View } from 'react-native'
import Layout from '../../layout/Layout'
import Heading from '../../ui/Heading'
import Contacts from './contacts/Contacts'
import Other from './other/Other'

const Payments: FC = () => {
	return (
		<Layout>
			<View style={{ margin: 'auto', width: '100%', maxWidth: 420 }}>
				<Heading text='Платежи' />
				<Contacts />
				<Other />
			</View>
		</Layout>
	)
}

export default Payments
