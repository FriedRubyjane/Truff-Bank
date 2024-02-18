import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Avatar from '../../ui/Avatar'
import Loader from '../../ui/Loader'
import Padding from '../../ui/Padding'
import { useProfile } from '../profile/useProfile'

const Header: FC = () => {
	const { isLoading, name } = useProfile()
	const { navigate } = useNavigation()

	return isLoading ? (
		<Loader />
	) : (
		<View style={{ margin: 'auto', width: '100%', maxWidth: 420 }}>
			<Padding style={tailwind('flex-row items-center')}>
				<Avatar name={name} />
				<TouchableOpacity
					onPress={() => navigate('Profile')}
					style={tailwind('flex-row items-end')}
				>
					<Text style={tailwind('text-2xl text-gray-800 font-bold')}>
						{name}
					</Text>
					<Entypo
						name='chevron-small-right'
						size={28}
						style={tailwind('text-gray-800')}
					/>
				</TouchableOpacity>
			</Padding>
		</View>
	)
}

export default Header
