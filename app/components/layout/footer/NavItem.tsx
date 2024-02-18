import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { TypeRootStackParamList } from '../../../navigation/types'
import { styles } from '../../../styles/navItem'
import { IFooterItem } from './types'

interface INavItem {
	item: IFooterItem
	navigate: (screenName: keyof TypeRootStackParamList) => void
	currentRoute: string
}

const NavItem: FC<INavItem> = ({ item, currentRoute, navigate }) => {
	const isActive = currentRoute === item.title

	return (
		<Pressable onPress={() => navigate(item.title)} style={styles.wrapper}>
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
