import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { View } from 'react-native'
import Footer from '../components/layout/footer/Footer'
import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import More from '../components/screens/more/More'
import Payments from '../components/screens/payments/Payments'
import Profile from '../components/screens/profile/Profile'
import Services from '../components/screens/services/Services'
import Support from '../components/screens/support/Support'
import { useAuth } from '../hooks/useAuth'

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
	const { user } = useAuth()

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{user ? (
						<>
							<Stack.Screen name='Home' component={Home} />
							<Stack.Screen name='Profile' component={Profile} />
							<Stack.Screen name='Payments' component={Payments} />
							<Stack.Screen name='Services' component={Services} />
							<Stack.Screen name='Support' component={Support} />
							<Stack.Screen name='More' component={More} />
						</>
					) : (
						<Stack.Screen name='Auth' component={Auth} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
			<View style={{ alignItems: 'center' }}>{user && <Footer />}</View>
		</View>
	)
}

export default Navigation
