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
import { stylesModal } from '../../../../styles/modal'
import Avatar from '../../../ui/Avatar'
import Button from '../../../ui/Button'
import { IAccount } from '../../home/accounts/types'
import { handleTransfer } from '../handleTransfer'
import { IContact } from './types'

const ContactItem: FC<{ contacts: IContact[]; accounts: IAccount[] }> = ({
	contacts,
	accounts,
}) => {
	const [fromAccount, setFromAccount] = useState<IAccount>(accounts[0])
	const [whereCard, setWhereCard] = useState<IContact>(contacts[0])

	const [sum, setSum] = useState('')
	const [modalVisible, setModalVisible] = useState(false)

	const handleInputChange = (inputText: string) => {
		const formattedText = inputText.replace(/[^0-9]/g, '')
		setSum(formattedText)
	}

	const handleSubmit = () => {
		try {
			handleTransfer(sum, fromAccount, whereCard.cardNumber)
		} catch (error: any) {
			console.log('Ошибка отправки:', error)
		}

		setModalVisible(false)
	}

	return (
		<>
			<Pressable style={styles.wrapper} onPress={() => setModalVisible(true)}>
				<Avatar size='large' name={whereCard.displayName} />
				<Text style={styles.text}>{whereCard.displayName}</Text>
			</Pressable>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible)
				}}
			>
				<View style={stylesModal.backGround}>
					<View style={stylesModal.wrapper}>
						<View>
							<Text>Введите сумму:</Text>
							<TextInput
								style={styles.modalInput}
								value={sum}
								onChangeText={handleInputChange}
							/>
						</View>
						<View style={{ marginTop: 12 }}>
							<Text>Перевести с вашей карты:</Text>
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
						<View style={{ marginTop: 12 }}>
							<Text>На карту другого пользователя:</Text>
							<View>
								{contacts.map((contact, index) => (
									<View key={contact._id}>
										<TouchableOpacity onPress={() => setWhereCard(contact)}>
											{fromAccount.currency === contact.currency && (
												<View
													style={{ flexDirection: 'row', alignItems: 'center' }}
												>
													<Text>{contact.cardNumber}</Text>
													{whereCard.cardNumber === contact.cardNumber && (
														<Text>(Выбрана)</Text>
													)}
												</View>
											)}
										</TouchableOpacity>
										{fromAccount.currency !== contact.currency &&
											index === 0 && (
												<Text>У пользователя нет карт с этой валютой</Text>
											)}
									</View>
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
