import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../styles/more'
import Layout from '../../layout/Layout'
import Heading from '../../ui/Heading'
import Padding from '../../ui/Padding'
import Currencies from './currencies/Currencies'
import Menu from './menu/Menu'

const More: FC = () => {
	return (
		<Layout>
			<View style={{ margin: 'auto', width: '100%', maxWidth: 420 }}>
				<Heading text='Другое' />
				<Padding>
					<Currencies />
					<Menu />
					<Text style={styles.versionApp}>Версия 1.0.0</Text>
				</Padding>
			</View>
		</Layout>
	)
}

export default More
