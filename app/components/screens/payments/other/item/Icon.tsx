import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { View } from 'react-native'
import { styles } from '../../../../../styles/icon'
import { IFooterItem } from '../../../../layout/footer/types'

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

const Icon: FC<IIcon> = ({ iconName }) => {
	return (
		<View style={styles.wrapper}>
			<AntDesign name={iconName} size={19} color='#EDF4FE' />
		</View>
	)
}

export default Icon
