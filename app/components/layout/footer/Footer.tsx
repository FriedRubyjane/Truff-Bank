import React, { FC } from 'react'
import { TypeRootStackParamList } from '../../../navigation/types'
import { styles } from '../../../styles/footer'
import Padding from '../../ui/Padding'
import NavItem from './NavItem'
import { menu } from './menu'

interface IFooter {
	navigate: (screenName: keyof TypeRootStackParamList) => void
	currentRoute: string
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
	return (
		<Padding style={styles.wrapper}>
			{menu.map(item => (
				<NavItem
					key={item.title}
					item={item}
					navigate={navigate}
					currentRoute={currentRoute}
				/>
			))}
		</Padding>
	)
}

export default Footer
