import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../../styles/servicesItem'
import { IService } from '../types'
import Percent from './Percent'
import { getRandomGradient } from './getRandomGradient'

const ServiceItem: FC<{ service: IService }> = ({ service }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.item}>
				<LinearGradient
					colors={getRandomGradient()}
					style={styles.linearGradient}
				>
					<Percent percent={service.percent} />
					<MaterialIcons name={service.iconName} size={30} color='#fff' />
				</LinearGradient>
			</View>
			<Text style={styles.text}>{service.title}</Text>
		</View>
	)
}

export default ServiceItem
