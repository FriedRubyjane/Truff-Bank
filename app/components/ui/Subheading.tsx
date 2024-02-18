import React, { FC } from 'react'
import { Text } from 'react-native'
import tailwind from 'tailwind-rn'
import Padding from './Padding'

const SubHeading: FC<{ text: string }> = ({ text }) => {
	return (
		<Padding>
			<Text style={tailwind('text-xl text-gray-800 font-bold')}>{text}</Text>
		</Padding>
	)
}

export default SubHeading
