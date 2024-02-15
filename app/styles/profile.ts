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
	updateSuccessView: {
		backgroundColor: 'rgb(34 197 94)',
		padding: 12,
		paddingTop: 8,
		paddingBottom: 8,
		borderRadius: 8,
		marginTop: 12,
	},
	updateSuccessText: {
		color: 'white',
		textAlign: 'center',
	},
})
