import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from '../../../../styles/other'
import SubHeading from '../../../ui/Subheading'
import { otherItems } from './data'
import OtherItem from './item/OtherItem'

const Other: FC = () => {
	return (
		<View>
			<SubHeading text='Важные переводы' />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.wrapper}
			>
				{otherItems.map(item => (
					<OtherItem key={item.title} item={item} />
				))}
			</ScrollView>
		</View>
	)
}

export default Other
