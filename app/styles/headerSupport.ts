import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 4,
		paddingBottom: 4,
		marginBottom: 8,
	},
	logo: {
		width: 45,
		height: 45,
		marginRight: 8,
	},
	titleText: {
		fontSize: 15,
		lineHeight: 20,
		color: 'rgb(31 41 55)',
		fontWeight: '500',
	},
	descriptionText: {
		fontSize: 12,
		lineHeight: 16,
		color: 'rgb(100 116 139)',
	},
})
