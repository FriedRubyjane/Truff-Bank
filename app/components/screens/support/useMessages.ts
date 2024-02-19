import dayjs from 'dayjs'
import {
	collection,
	onSnapshot,
	orderBy,
	query,
	where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'
import { IMessage } from './types'

export const useMessages = () => {
	const { user } = useAuth()

	const [messages, setMessages] = useState<IMessage[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'messages'),
					where('userId', '==', user?.uid),
					orderBy('timestamp', 'asc')
				),
				snapshot => {
					setMessages(
						snapshot.docs.map(d =>
							d.data()?.timestamp
								? ({
										_id: d.id,
										...d.data(),
										timestamp: dayjs
											.unix(d.data()?.timestamp.seconds)
											.format('HH:mm'),
								  } as IMessage)
								: ({
										_id: d.id,
										...d.data(),
								  } as IMessage)
						)
					)

					setIsLoading(false)
				}
			),
		[]
	)

	return { messages, isLoading }
}
