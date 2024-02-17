import { AntDesign } from '@expo/vector-icons'
import React, { FC, useState } from 'react'
import { Pressable, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { styles } from '../../../styles/navItem'
import { IFooterItem } from './types'

interface INavItem {
	item: IFooterItem
}

const NavItem: FC<INavItem> = ({ item }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<Pressable onPress={() => {}} style={styles.wrapper}>
			<AntDesign
				name={item.iconName}
				style={tailwind(
					`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`
				)}
			/>
			<Text
				style={{
					...tailwind(
						`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`
					),
					...{ marginTop: 1 },
				}}
			>
				{item.title}
			</Text>
		</Pressable>
	)
}

export default NavItem
