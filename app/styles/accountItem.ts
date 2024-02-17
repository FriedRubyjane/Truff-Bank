import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	itemWrapper: {
		width: 320,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 28,
	},
	currencyCircle1: {
		borderRadius: 9999,
		backgroundColor: 'rgb(59 130 246)',
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
	currencyCircle2: {
		borderRadius: 9999,
		backgroundColor: '#EDF4FE',
		width: 20,
		height: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	balanceWrapper: {
		width: '66.666667%',
	},
	balanceFirstText: {
		fontSize: 15,
	},
	balanceSecondText: {
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 2,
	},
	imageCardImage: {
		justifyContent: 'flex-end',
		width: 56,
		height: 40,
		padding: 4.5,
	},
	imageText: {
		color: 'white',
		fontSize: 12,
		fontWeight: '500',
	},
})
