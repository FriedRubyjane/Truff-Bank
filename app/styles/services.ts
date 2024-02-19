import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		maxWidth: 420,
		margin: 'auto',
	},
	text: {
		marginTop: 25,
		fontSize: 18,
		lineHeight: 28,
		marginBottom: 24,
	},
	items: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
})
