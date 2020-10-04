import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../config';

export default function Header(props) {

	const styles = {
		container: {
			paddingVertical: 10,
			paddingHorizontal: 10,
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.primary,
			justifyContent: 'space-between'
		},
		content: {
			flexDirection: 'row',
			alignItems: 'center',
			flex: 4
		},
		image: { 
			height: 30, 
			width: 30, 
			borderRadius: 15 
		},
		contentWrapper: {
			marginLeft: 20,
			flex: 2
		}
	}

	function renderContent() {
		if(props.children) {
			return props.children
		} else if(props.title) {
			return <Text style={{ color: 'white', fontSize: 18}}>{props.title}</Text>
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image source={require("../images/ffb.png")} style={styles.image} />
				<View style={styles.contentWrapper}>
					{renderContent()}
				</View>
			
			</View>
			{/* {props.children} */}
			<View style={{ flex: 1 }}>
				<TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
					<Icon name="share" type="material" color="white" />
				</TouchableOpacity>
			</View>
		</View>
	)
}