import { MaterialIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Linking, Pressable, Text, View } from 'react-native'
import { BOX_SHADOW } from '../../../../styles'
import { styles } from '../../../../styles/menuItem'
import { IMoreItem } from './types'

const MenuItem: FC<{ item: IMoreItem }> = ({ item }) => {
	return (
		<Pressable
			style={{ ...styles.wrapper, ...BOX_SHADOW }}
			onPress={() => Linking.openURL(item.link)}
		>
			<View style={styles.item}>
				<Text style={styles.tittle}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
			</View>
			<View style={styles.icon}>
				<MaterialIcons name={item.iconName} size={22} color='#EDF4FE' />
			</View>
		</Pressable>
	)
}

export default MenuItem
