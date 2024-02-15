import React, { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useAuth } from '../../../hooks/useAuth'
import { styles } from '../../../styles/auth'
import { styleCenter } from '../../layout/Layout'
import Button from '../../ui/Button'
import Filed from '../../ui/Filed'
import Loader from '../../ui/Loader'

interface IData {
	email: string
	password: string
}

const Auth: FC = () => {
	const { isLoading, login, register } = useAuth()
	const [data, setData] = useState<IData>({} as IData)
	const [isRegister, setIsRegister] = useState(false)

	const authHandler = async () => {
		const { email, password } = data

		if (isRegister) await register(email, password)
		else await login(email, password)

		setData({} as IData)
	}

	return (
		<View style={styleCenter}>
			<View style={styles.wrapper}>
				<View style={styles.form}>
					<Text style={styles.mainText}>
						{isRegister ? 'Регистрация' : 'Вход'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Filed
								id='email'
								value={data.email}
								placeholder='Введите почту'
								onChange={value => setData({ ...data, email: value })}
							/>
							<Filed
								id='password'
								value={data.password}
								placeholder='Введите пароль'
								onChange={value => setData({ ...data, password: value })}
								isSecure={true}
							/>
							<Button
								onPress={authHandler}
								title={isRegister ? 'Зарегистрироваться' : 'Войти'}
							/>
							<Pressable onPress={() => setIsRegister(!isRegister)}>
								<Text style={styles.changeRegisterText}>
									{isRegister ? 'Вход' : 'Регистрация'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</View>
	)
}

export default Auth
