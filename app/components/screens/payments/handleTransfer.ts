import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	updateDoc,
	where,
} from 'firebase/firestore'
import { db } from '../../../firebase'
import { IAccount } from '../home/accounts/types'

export const handleTransfer = async (
	sum: string,
	fromAccount: IAccount,
	cardNumber: string
) => {
	try {
		console.log('Вызов есть')

		let accountToId = ''
		let currentToBalance = ''

		const querySnapshot = await getDocs(
			query(
				collection(db, 'accounts'),
				where('cardNumber', '==', cardNumber),
				limit(1)
			)
		)

		querySnapshot.docs.forEach(doc => {
			accountToId = doc.id
		})

		const docRefTo = doc(db, 'accounts', accountToId)
		const docRefFrom = doc(db, 'accounts', fromAccount._id)
		const docSnapTo = await getDoc(docRefTo)

		if (docSnapTo.exists()) {
			currentToBalance = docSnapTo.data().balance
		} else {
			console.log('Такой карты не существует')
			return
		}

		if (fromAccount.balance - Number(sum) >= 0) {
			await updateDoc(docRefTo, {
				balance: currentToBalance + Number(sum),
			})

			await updateDoc(docRefFrom, {
				balance: fromAccount.balance - Number(sum),
			})
		} else {
			console.log('Недостаточно средств')
			return
		}

		return
	} catch (error: any) {
		console.log('Ошибка перевода:', error)
	}
}
