import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { FC, useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { db } from '../../../../firebase'
import { useAuth } from '../../../../hooks/useAuth'
import { stylesModal } from '../../../../styles/modal'
import { getRandomCardNumber } from '../../../../utils/getRandomCardNumber'
import Button from '../../../ui/Button'

const ApplyNewProduct: FC = () => {
	const { user } = useAuth()

	const [cardType, setCardType] = useState('Truff Black')
	const [currency, setCurrency] = useState('RUB')
	const [modalVisible, setModalVisible] = useState(false)

	const registerHandler = async () => {
		try {
			setModalVisible(!modalVisible)

			await addDoc(collection(db, 'accounts'), {
				userId: user?.uid,
				timestamp: serverTimestamp(),
				cardNumber: getRandomCardNumber(),
				cardName: cardType,
				currency: currency,
				balance: 0,
			})
		} catch (error: any) {
			console.log('Ошибка заказа', error)
		}
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View
				style={{
					width: '100%',
					maxWidth: 352.5,
					margin: 'auto',
					marginTop: 24,
					paddingRight: 16,
					paddingLeft: 16,
				}}
			>
				<Button
					onPress={() => setModalVisible(true)}
					title='Заказать новую карту'
				/>
			</View>
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
							<Text>Выберите валюту:</Text>
							<TouchableOpacity onPress={() => setCurrency('RUB')}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Text>RUB</Text>
									{currency === 'RUB' && <Text>(Выбрана)</Text>}
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setCurrency('USD')}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Text>USD</Text>
									{currency === 'USD' && <Text>(Выбрана)</Text>}
								</View>
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 12 }}>
							<Text>Выберите тип карты:</Text>
							<TouchableOpacity onPress={() => setCardType('Truff Black')}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Text>Black</Text>
									{cardType === 'Truff Black' && <Text>(Выбран)</Text>}
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => setCardType('Truff All Airlines')}
							>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Text>All Airlines</Text>
									{cardType === 'Truff All Airlines' && <Text>(Выбран)</Text>}
								</View>
							</TouchableOpacity>
						</View>
						<Button onPress={registerHandler} title='Заказать' />
						<Button
							onPress={() => setModalVisible(false)}
							title='Отменить'
							colors={['bg-gray-200', '#D6D8DB']}
						/>
					</View>
				</View>
			</Modal>
		</View>
	)
}

export default ApplyNewProduct
