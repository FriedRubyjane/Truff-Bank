import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../../../styles/header'
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
		<Padding style={styles.wrapper}>
			<Avatar name={name} />
			<TouchableOpacity
				onPress={() => navigate('Profile')}
				style={styles.touchable}
			>
				<Text style={styles.profileName}>{name}</Text>
				<Entypo name='chevron-small-right' size={28} style={styles.entypo} />
			</TouchableOpacity>
		</Padding>
	)
}

export default Header
