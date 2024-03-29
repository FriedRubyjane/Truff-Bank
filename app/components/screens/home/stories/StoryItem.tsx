import React, { FC } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { useData } from '../../../../hooks/useData'
import { IStory } from './types'

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
	const { setActiveStories } = useData()

	return (
		<Pressable onPress={() => setActiveStories(story.images)}>
			<View
				style={{
					...tailwind(
						'w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400'
					),
					padding: 2,
					borderWidth: 1,
				}}
			>
				<ImageBackground
					source={{ uri: story.images[0] }}
					resizeMode='cover'
					style={tailwind('w-full h-full justify-end')}
					imageStyle={tailwind('rounded-xl')}
				>
					<Text style={{ ...tailwind('text-white'), fontSize: 12, margin: 8 }}>
						{story.heading}
					</Text>
				</ImageBackground>
			</View>
		</Pressable>
	)
}

export default StoryItem
