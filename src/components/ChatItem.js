import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ChatItem(props) {

	const styles = {
		container: {
			flexDirection: 'row',
			borderBottomWidth: 0.3,
			borderTopWidth: 0.3,
			borderColor: '#00000020',
			padding: 10,
			marginVertical: 15,
			marginHorizontal: 10,
			backgroundColor: 'white',
			borderRadius: 5,
			elevation: 5
		},
		imageWrapper: {
			elevation: 50,
			height: 50,
			width: 50,
			marginRight: 20
		},
		image: {
			width: 50,
			height: 50,
			elevation: 50
		},
		title: {
			fontWeight: 'bold',
			letterSpacing: 1,
			marginBottom: 5
		},
		description: {
			fontSize: 11, 
			color: 'gray',
			fontWeight: 'bold'
		}
	}

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
			<View style={styles.container}>
				<View style={styles.imageWrapper}>
					<Image 
						source={{ uri: 'https://img.favpng.com/9/8/2/fc-barcelona-museum-football-team-manager-png-favpng-YgVU2WBmeQUjZP5X0EzC5VaTw.jpg' }}
						style={styles.image}
					/>
				</View>
				<View>
					<Text style={styles.title}>Liverpool FC</Text>
					<Text style={styles.description}>The FFB Chat book</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}