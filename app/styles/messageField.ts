import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		marginTop: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 4,
		paddingBottom: 20,
	},
	items: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		gap: 16,
	},
	textInput: {
		backgroundColor: 'rgb(243 244 246)',
		borderRadius: 12,
		padding: 12,
		width: '83.333333%',
		height: 40,
	},
	icon: {
		color: 'rgb(147 197 253)',
	},
})
