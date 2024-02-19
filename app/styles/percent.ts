import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderRightWidth: 27,
		borderTopWidth: 27,
		borderRightColor: 'transparent',
		borderTopColor: '#AAEF00',
		transform: [{ rotate: '90deg' }],
	},
	text: {
		width: 40,
		height: 40,
		position: 'absolute',
		fontSize: 10,
		top: -35,
		left: 6,
		transform: [{ rotate: '-40deg' }],
	},
})
