import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		maxWidth: 480,
		margin: 'auto',
	},
	form: {
		width: '75%',
	},
	mainText: {
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 2,
		color: '#1f2937',
		fontSize: 24,
		lineHeight: 32,
	},
	changeRegisterText: {
		color: 'rgb(31 41 55)',
		opacity: 0.3,
		textAlign: 'right',
		fontSize: 14,
		lineHeight: 20,
	},
	placeholder: {
		color: '#82868d',
	},
})
