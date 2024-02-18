import React, { FC, useState } from 'react'
import { Modal, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from '../../../../styles/contactItem'
import Avatar from '../../../ui/Avatar'
import Button from '../../../ui/Button'
import { useAccounts } from '../../home/accounts/useAccounts'
import { handleTransfer } from '../handleTransfer'
import { IContact } from './types'

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
	const { accounts } = useAccounts()

	const [sum, setSum] = useState('')
	const [modalVisible, setModalVisible] = useState(false)

	const handleInputChange = (inputText: string) => {
		const formattedText = inputText.replace(/[^0-9]/g, '')
		setSum(formattedText)
	}

	const handleSubmit = () => {
		try {
			handleTransfer(sum, accounts[0], contact.cardNumber)
		} catch (error: any) {
			console.log('Ошибка отправки:', error)
		}

		setModalVisible(false)
	}

	return (
		<>
			<Pressable style={styles.wrapper} onPress={() => setModalVisible(true)}>
				<Avatar size='large' name={contact.displayName} />
				<Text style={styles.text}>{contact.displayName}</Text>
			</Pressable>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible)
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'rgba(0,0,0,0.5)',
					}}
				>
					<View style={{ backgroundColor: 'white', padding: 20 }}>
						<View>
							<Text>Введите сумму:</Text>
							<TextInput value={sum} onChangeText={handleInputChange} />
						</View>
						<Button onPress={handleSubmit} title='Перевести' />
						<Button
							onPress={() => setModalVisible(false)}
							title='Отменить'
							colors={['bg-gray-200', '#D6D8DB']}
						/>
					</View>
				</View>
			</Modal>
		</>
	)
}

export default ContactItem
