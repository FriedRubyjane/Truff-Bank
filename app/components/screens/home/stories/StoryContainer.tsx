import React, { FC } from 'react'
import { useData } from '../../../../hooks/useData'

const StoryContainer: FC = () => {
	const { activeStories, setActiveStories } = useData()

	return activeStories && <></>
}

export default StoryContainer
