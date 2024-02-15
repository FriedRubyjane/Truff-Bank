import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useAuth } from '../../../hooks/useAuth'
import { styles } from '../../../styles/profile'
import Layout from '../../layout/Layout'
import Button from '../../ui/Button'
import Filed from '../../ui/Filed'
import Heading from '../../ui/Heading'
import Loader from '../../ui/Loader'
import { useProfile } from './useProfile'
import { useUpdateProfile } from './useUpdateProfile'

const Profile: FC = () => {
	const { logout } = useAuth()
	const { isLoading: isProfileLoading, name, setName, profile } = useProfile()

	const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
		name,
		profile.docId
	)

	return (
		<Layout>
			<View style={styles.wrapper}>
				<View style={styles.form}>
					<Heading text='Профиль' isCenter={true} />
					<View>
						{isSuccess && (
							<View style={styles.updateSuccessView}>
								<Text style={styles.updateSuccessText}>Имя изменено</Text>
							</View>
						)}
						{isProfileLoading || isLoading ? (
							<Loader />
						) : (
							<>
								<Filed
									onChange={setName}
									value={name}
									placeholder='Введите ваше имя'
								/>
								<Button onPress={updateProfile} title='Изменить имя' />
								<Button
									onPress={logout}
									title='Выйти из аккаунта'
									colors={['bg-gray-200', '#D6D8DB']}
								/>
							</>
						)}
					</View>
				</View>
			</View>
		</Layout>
	)
}

export default Profile
