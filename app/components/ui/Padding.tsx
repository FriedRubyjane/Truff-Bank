import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'

const Padding: FC<PropsWithChildren<{ style?: any }>> = ({
	children,
	style = {},
}) => {
	return (
		<View
			style={{
				...{
					paddingLeft: 16,
					paddingRight: 16,
				},
				...style,
			}}
		>
			{children}
		</View>
	)
}

export default Padding
