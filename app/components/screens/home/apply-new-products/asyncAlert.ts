import { Alert } from 'react-native'

interface IButtons {
	text: string
	resolveValue: string
	textSecond: string
	resolveValueSecond: string
}

interface IAsyncAlert {
	title: string
	message?: string
	buttons: IButtons
}

export const asyncAlert = ({ title, message, buttons }: IAsyncAlert) =>
	new Promise(resolve => {
		Alert.alert(
			title,
			message,
			[
				{
					text: buttons.text,
					onPress: () => {
						resolve(buttons.resolveValue)
					},
				},
				{
					text: buttons.textSecond,
					onPress: () => {
						resolve(buttons.resolveValueSecond)
					},
				},
			],
			{ cancelable: false }
		)
	})
