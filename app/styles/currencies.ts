import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		marginTop: 20,
		flexDirection: 'row',
		borderRadius: 16,
		backgroundColor: 'white',
		paddingTop: 12,
		paddingBottom: 12,
		justifyContent: 'center',
	},
	currencyItem: {
		fontSize: 12,
		lineHeight: 16,
		width: '33.333333%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	textName: {
		color: 'rgb(156 163 175)',
		marginRight: 4,
	},
	textCurrency: {
		color: 'rgb(31 41 55)',
	},
})
