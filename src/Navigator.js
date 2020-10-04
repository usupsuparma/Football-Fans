import React, { useContext } from 'react';
import { Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { authState } from './contexts/AuthContext'

import { Home, Chats, Chat, Post, Profile, Search, Signin, Signup, ForgotPassword } from './screens';

import { colors } from './config';

import { Icon } from 'react-native-elements';

export default function Navigator() {

	const WINDOW_HEIGHT = Dimensions.get('window').height;

	const HomeStack = createStackNavigator();
	const ChatStack = createStackNavigator();
	const RootStack = createBottomTabNavigator();
	const AuthStack = createStackNavigator();

	function AuthStackScreen() {
		return (
			<AuthStack.Navigator initialRouteName="Signin" headerMode="none">
				<AuthStack.Screen name="Signin" component={Signin} />
				<AuthStack.Screen name="Signup" component={Signup} />
				<AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
			</AuthStack.Navigator>
		)
	}
	function HomeStackScreen() {
		return (
			<HomeStack.Navigator initialRouteName="Home" headerMode="none">
				<HomeStack.Screen name="Home" component={Home} />
				<HomeStack.Screen name="Post" component={Post} />
				<HomeStack.Screen name="Search" component={Search} />
			</HomeStack.Navigator>
		)
	}

	function ChatStackScreen() {
		return (
			<ChatStack.Navigator initialRouteName="Chats" headerMode="none">
				<ChatStack.Screen name="Chats" component={Chats} />
				<ChatStack.Screen name="Chat" component={Chat} />
			</ChatStack.Navigator>
		)
	}


	function RootNavigator() {

		return (
			<RootStack.Navigator 
			initialRouteName="Home"  
			tabBarOptions={{
				activeTintColor: 'white',
				inactiveTintColor: '#ffffff90',
				
				style: {
					backgroundColor: colors.primary,
					borderTopWidth: 0
				}
			}}
			screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
							return <Icon name={iconName} type="material-community" size={size} color={color} />
            } else if (route.name === 'Chats') {
              iconName = focused ? 'chat-bubble' : 'chat-bubble-outline';
							return <Icon name={iconName} type="material" size={size} color={color} />
            } else if(route.name === 'Profile') {
							iconName = focused ? 'person' : 'person-outline';
							return <Icon name={iconName} type="material" size={size} color={color} />
						}
          },
        })}>
				<RootStack.Screen name="Home" component={HomeStackScreen} />
				<RootStack.Screen name="Chats" component={ChatStackScreen} />
				<RootStack.Screen name="Profile" component={Profile} />
			</RootStack.Navigator>
		)
	}

	// const isSignedIn = useContext(authS).isSignedIn;

	return (

			<NavigationContainer>
				{
					// isSignedIn ? 
					false 
					? <RootNavigator /> 
					: <AuthStackScreen />
				}
			</NavigationContainer>
	)
}

