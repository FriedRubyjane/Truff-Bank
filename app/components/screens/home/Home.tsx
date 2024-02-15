import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Layout from '../../layout/Layout'
import Header from './Header'

const Home: FC = () => {
	return (
		<Layout>
			<View style={{ margin: 'auto', width: 480, height: '100%' }}>
				<Header />
				<Text>Home</Text>
			</View>
		</Layout>
	)
}

export default Home