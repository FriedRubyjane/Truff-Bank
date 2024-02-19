import { MaterialIcons } from '@expo/vector-icons'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { FC, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'
import { styles } from '../../../styles/messageField'

const Field: FC = () => {
	const { user } = useAuth()

	const [message, setMessage] = useState('')

	const handleSendMessage = async () => {
		try {
			await addDoc(collection(db, 'messages'), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				text: message,
				role: 'user',
			})
		} catch (error: any) {
			console.log('Ошибка отправки сообщения:', error)
		} finally {
			setMessage('')
		}
	}

	return (
		<View style={styles.wrapper}>
			<View style={styles.items}>
				<TextInput
					placeholder='Введите сообщение...'
					onChangeText={setMessage}
					value={message}
					showSoftInputOnFocus={false}
					autoCapitalize='none'
					style={styles.textInput}
				/>
				<Pressable onPress={handleSendMessage}>
					<MaterialIcons name='send' size={32} style={styles.icon} />
				</Pressable>
			</View>
		</View>
	)
}

export default Field
