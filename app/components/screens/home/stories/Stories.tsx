import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from '../../../../styles/stories'
import Loader from '../../../ui/Loader'
import StoryItem from './StoryItem'
import { useStories } from './useStories'

const Stories: FC = () => {
	const { stories, isLoading } = useStories()

	return (
		<View style={styles.wrapper}>
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{stories.map(story => (
						<StoryItem key={story._id} story={story} />
					))}
				</ScrollView>
			)}
		</View>
	)
}

export default Stories
