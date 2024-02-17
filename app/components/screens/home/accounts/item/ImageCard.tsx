import React, { FC } from 'react'
import { ImageBackground, ImageSourcePropType, Text } from 'react-native'
import { styles } from '../../../../../styles/accountItem'
import { IAccount } from '../types'

const ImageCard: FC<{ account: IAccount }> = ({
	account: { cardName, cardNumber },
}) => {
	const imageBlack: ImageSourcePropType = require('../../../../../../assets/cards/black.png')
	const imageAllAirlines: ImageSourcePropType = require('../../../../../../assets/cards/all-airlines.png')

	return (
		<ImageBackground
			source={cardName === 'Truff Black' ? imageBlack : imageAllAirlines}
			resizeMode='contain'
			style={styles.imageCardImage}
		>
			<Text style={styles.imageText}>{cardNumber.slice(-4)}</Text>
		</ImageBackground>
	)
}

export default ImageCard
