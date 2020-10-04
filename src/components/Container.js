import React from 'react';
import { View, StatusBar } from 'react-native';
import { colors } from '../config';

export default function Container(props) {
	return (
		<>
			<StatusBar backgroundColor={colors.primary} />
			<View style={{ flex: 1, backgroundColor: colors.primary }}>
				{props.children}
			</View>
		</>
	)
}