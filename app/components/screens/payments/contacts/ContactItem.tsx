import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from '../../../../styles/contactItem'
import Avatar from '../../../ui/Avatar'
import { IContact } from './types'

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
	return (
		<Pressable style={styles.wrapper}>
			<Avatar size='large' name={contact.displayName} />
			<Text style={styles.text}>{contact.displayName}</Text>
		</Pressable>
	)
}

export default ContactItem
