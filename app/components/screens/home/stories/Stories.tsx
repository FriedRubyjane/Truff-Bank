import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Loader from '../../../ui/Loader'
import StoryItem from './StoryItem'
import { useStories } from './useStories'

const Stories: FC = () => {
	const { stories, isLoading } = useStories()

	return (
		<View style={{ margin: 'auto', width: '100%', maxWidth: 420 }}>
			<View style={tailwind('my-7')}>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{ paddingRight: 16 }}
					>
						{stories.map(story => (
							<StoryItem key={story._id} story={story} />
						))}
					</ScrollView>
				)}
			</View>
		</View>
	)
}

export default Stories
