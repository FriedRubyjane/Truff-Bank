import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Alert } from 'react-native'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'

export const useUpdateProfile = (name: string, docId: string) => {
	const { user } = useAuth()

	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const updateProfile = async () => {
		if (!user) return

		setIsLoading(true)

		try {
			const docRef = doc(db, 'users', docId)

			await updateDoc(docRef, {
				displayName: name,
			})

			setIsSuccess(true)

			setTimeout(() => {
				setIsLoading
			}, 3000)
		} catch (error: any) {
			Alert.alert('Ошибка при изменении имени', error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return { isLoading, updateProfile, isSuccess }
}
