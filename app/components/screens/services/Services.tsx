import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../styles/services'
import Layout from '../../layout/Layout'
import { services } from './data'
import ServiceItem from './item/ServiceItem'

const Services: FC = () => {
	return (
		<Layout>
			<View style={styles.wrapper}>
				<Text style={styles.text}>г. Москва</Text>
				<View style={styles.items}>
					{services.map(service => (
						<ServiceItem key={service.title} service={service} />
					))}
				</View>
			</View>
		</Layout>
	)
}

export default Services
