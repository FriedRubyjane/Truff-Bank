import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from '../../../../styles/contacts'
import Loader from '../../../ui/Loader'
import SubHeading from '../../../ui/Subheading'
import ContactItem from './ContactItem'
import { useContacts } from './useContacts'

const Contacts: FC = () => {
	const { contacts, isLoading } = useContacts()

	return (
		<View style={styles.wrapper}>
			<SubHeading text='Телефонные переводы' />
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView
					horizontal
					showsVerticalScrollIndicator={false}
					style={styles.scroll}
				>
					{contacts.map(contact => (
						<ContactItem key={contact._id} contact={contact} />
					))}
				</ScrollView>
			)}
		</View>
	)
}

export default Contacts
