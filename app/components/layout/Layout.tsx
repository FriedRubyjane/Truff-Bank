import React, { FC, PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from '../../styles/layout'

interface ILayout {
	isScrollView?: boolean
}

export const styleCenter = styles.wrapper

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	isScrollView = true,
}) => {
	return (
		<View style={styleCenter}>
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	)
}

export default Layout
