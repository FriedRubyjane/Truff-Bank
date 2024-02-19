import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../../styles/percent'

const Percent: FC<{ percent: number }> = ({ percent }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.text}>{percent + '%'}</Text>
		</View>
	)
}

export default Percent
