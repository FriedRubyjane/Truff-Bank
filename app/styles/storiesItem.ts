import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		width: 96,
		height: 96,
		borderRadius: 16,
		marginLeft: 16,
		borderStyle: 'solid',
		borderColor: 'rgb(96 165 250)',
		padding: 2,
		borderWidth: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	imageStyle: {
		borderRadius: 12,
	},
	title: {
		color: 'white',
		fontSize: 12,
		margin: 8,
	},
})
