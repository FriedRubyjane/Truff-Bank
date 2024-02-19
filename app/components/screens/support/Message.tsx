import React, { FC } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { useAuth } from '../../../hooks/useAuth'
import { IMessage } from './types'

const Message: FC<{ message: IMessage }> = ({ message }) => {
	const { user } = useAuth()

	const isMessageByAuthUser = user?.uid === message.userId

	return (
		<View
			style={tailwind(
				`flex-row items-end rounded-lg ${
					isMessageByAuthUser
						? 'bg-blue-500 self-end'
						: 'bg-gray-200 self-start'
				} my-2 py-2 px-3`
			)}
		>
			<Text
				style={tailwind(
					`${isMessageByAuthUser ? 'text-white' : 'text-gray-800'}`
				)}
			>
				{message.text}
			</Text>
			<Text
				style={{
					...tailwind(
						`${
							isMessageByAuthUser ? 'text-white' : 'text-gray-700'
						} opacity-70 ml-2`
					),
					fontSize: 10,
				}}
			>
				{String(message.timestamp)}
			</Text>
		</View>
	)
}

export default Message
