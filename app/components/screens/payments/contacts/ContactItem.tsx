import React, { FC, useState } from 'react'
import {
	Modal,
	Pressable,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { styles } from '../../../../styles/contactItem'
import Avatar from '../../../ui/Avatar'
import Button from '../../../ui/Button'
import { IAccount } from '../../home/accounts/types'
import { handleTransfer } from '../handleTransfer'
import { IContact } from './types'

const ContactItem: FC<{ contact: IContact; accounts: IAccount[] }> = ({
	contact,
	accounts,
}) => {
	const [fromAccount, setFromAccount] = useState<IAccount>(accounts[0])
	const [whereCard, setWhereCard] = useState()

	const [sum, setSum] = useState('')
	const [modalVisible, setModalVisible] = useState(false)

	const handleInputChange = (inputText: string) => {
		const formattedText = inputText.replace(/[^0-9]/g, '')
		setSum(formattedText)
	}

	const handleSubmit = () => {
		try {
			handleTransfer(sum, fromAccount, contact.cardNumber)
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
							<TextInput
								style={styles.modalInput}
								value={sum}
								onChangeText={handleInputChange}
							/>
						</View>
						<View style={{ marginTop: 12 }}>
							<Text>Выберите вашу карту:</Text>
							<View>
								{accounts.map(account => (
									<TouchableOpacity
										key={account._id}
										onPress={() => setFromAccount(account)}
									>
										<View
											style={{ flexDirection: 'row', alignItems: 'center' }}
										>
											<Text>{account.cardNumber}</Text>
											{fromAccount.cardNumber === account.cardNumber && (
												<Text>(Выбрана)</Text>
											)}
										</View>
									</TouchableOpacity>
								))}
							</View>
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
