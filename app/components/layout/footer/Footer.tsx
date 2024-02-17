import React, { FC } from 'react'
import { styles } from '../../../styles/footer'
import Padding from '../../ui/Padding'
import NavItem from './NavItem'
import { menu } from './menu'

const Footer: FC = () => {
	return (
		<Padding style={styles.wrapper}>
			{menu.map(item => (
				<NavItem key={item.title} item={item} />
			))}
		</Padding>
	)
}

export default Footer
