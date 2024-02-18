import React, { FC } from 'react'
import { View } from 'react-native'
import Layout from '../../layout/Layout'
import Heading from '../../ui/Heading'

const Payments: FC = () => {
	return (
		<Layout>
			<View style={{ margin: 'auto', width: '100%', maxWidth: 420 }}>
				<Heading text='Payment' />
			</View>
		</Layout>
	)
}

export default Payments
