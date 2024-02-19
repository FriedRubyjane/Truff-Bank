import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../../styles/headerSupport'

const Header: FC = () => {
	return (
		<View style={styles.wrapper}>
			<Image
				source={require('../../../../assets/favicon.png')}
				style={styles.logo}
			/>
			<View>
				<Text style={styles.titleText}>Поддержка</Text>
				<Text style={styles.descriptionText}>Мы на связи 24/7</Text>
			</View>
		</View>
	)
}

export default Header
