export interface IMessage {
	_id: string
	text: string
	userId: string
	role: string
	timestamp: Date | string
}
