import React, { FC } from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import { styles } from '../../../../styles/storiesItem'
import { IStory } from './types'

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
	return (
		<Pressable onPress={() => {}}>
			<View style={styles.wrapper}>
				<ImageBackground
					source={{ uri: story.images[0] }}
					resizeMode='cover'
					style={styles.image}
					imageStyle={styles.imageStyle}
				>
					<Text style={styles.title}>{story.heading}</Text>
				</ImageBackground>
			</View>
		</Pressable>
	)
}

export default StoryItem
