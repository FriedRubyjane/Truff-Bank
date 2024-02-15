import { FC } from 'react'
import { TextInput } from 'react-native'
import { styles } from '../../styles/field'

interface IField {
	onChange: (value: string) => void
	value: string
	placeholder: string
	isSecure?: boolean
	id?: string
}

const Filed: FC<IField> = ({ onChange, value, placeholder, isSecure, id }) => {
	return (
		<TextInput
			id={id}
			showSoftInputOnFocus={false}
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize='none'
			style={styles.textInput}
		/>
	)
}

export default Filed
