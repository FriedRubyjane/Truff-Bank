import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		marginTop: 16,
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 16,
		justifyContent: 'space-between',
	},
	item: {
		width: '83.333333%',
	},
	tittle: {
		fontSize: 20,
		lineHeight: 28,
		color: 'rgb(31 41 55)',
		fontWeight: 'bold',
	},
	description: {
		marginTop: 4,
		color: 'rgb(107 114 128)',
		opacity: 0.9,
	},
	icon: {
		borderRadius: 9999,
		backgroundColor: 'rgb(59 130 246)',
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
