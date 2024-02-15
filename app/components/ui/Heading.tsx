import React, { FC } from 'react'
import { Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { styles } from '../../styles/heading'
import Padding from './Padding'

const Heading: FC<{ text: string; isCenter?: boolean }> = ({
	text,
	isCenter = false,
}) => {
	return (
		<Padding>
			<Text
				style={{
					...styles.text,
					...tailwind(`${isCenter ? 'text-center' : ''}`),
				}}
			>
				{text}
			</Text>
		</Padding>
	)
}

export default Heading
