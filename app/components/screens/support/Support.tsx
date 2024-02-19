import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from '../../../styles/support'
import Layout from '../../layout/Layout'
import Padding from '../../ui/Padding'
import Field from './Field'
import Header from './Header'
import Message from './Message'
import { useMessages } from './useMessages'

const Support: FC = () => {
	const { messages } = useMessages()

	return (
		<Layout isScrollView={false}>
			<View style={styles.wrapper}>
				<Padding style={{ flex: 1 }}>
					<Header />
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{
							height: '83%',
						}}
					>
						{messages.map(msg => (
							<Message key={msg._id} message={msg} />
						))}
					</ScrollView>
					<Field />
				</Padding>
			</View>
		</Layout>
	)
}

export default Support
