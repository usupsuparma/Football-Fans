import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import Navigator from './Navigator';
import RNBootSplash from "react-native-bootsplash";

import { NotifierWrapper } from 'react-native-notifier';

import { AuthContext } from './contexts';

export default function App() {

	useEffect(() => {
	
		RNBootSplash.hide({ duration: 250 });

	}, []);

	return (
		<NotifierWrapper>
			<AuthContext>
				<Navigator />
			</AuthContext>
		</NotifierWrapper>
	)
}