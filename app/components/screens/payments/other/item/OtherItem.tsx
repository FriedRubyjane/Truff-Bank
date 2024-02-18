import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { BOX_SHADOW } from '../../../../../styles'
import { styles } from '../../../../../styles/otherItem'
import { IOtherItem } from '../types'
import Icon from './Icon'

const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
	return (
		<Pressable style={{ ...styles.wrapper, ...BOX_SHADOW }}>
			<Icon iconName={item.iconName} />
			<Text style={styles.text}>{item.title}</Text>
		</Pressable>
	)
}

export default OtherItem
