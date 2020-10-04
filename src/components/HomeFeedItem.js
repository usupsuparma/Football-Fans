import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { colors } from '../config';

export default function HomeFeedItem(props) {

	const styles = {
		container: {
			backgroundColor: 'white',
			marginVertical: 15,
			width: '90%',
			alignSelf: 'center',
			elevation: 5,
			borderRadius: 10,
			padding: 10
		},
		header: {
			flexDirection: 'row',
			marginBottom: 10
		},
		titleWrapper: {
			flex: 2,
			marginHorizontal: 10
		},
		title: {
			fontWeight: 'bold',
			fontSize: 14
		},
		date: {
			color: 'gray',
			fontWeight: 'light',
			fontSize: 11,
			marginTop: 5

		},
		followBtnWrapper: {
			backgroundColor: '#3C419230',
			height: 20,
			width: 60,
			alignItems: 'center',
			borderRadius: 10
		},
		followBtnText: {
			color: colors.primary
		},
		description: {
			color: '#00000099',
			fontSize: 13
		},
		footer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: 10
		}
	}

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('../images/ffb.png')} style={{ width: 50, height: 50, borderRadius: 25 }} />
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>Eden Hazard: RealMadrid forward misses man city champions league clash</Text>
						<Text style={styles.date}>April 16th 2020</Text>
					</View>
				</View>
				<Image source={{ uri: 'https://via.placeholder.com/300x300' }} style={{ width: '100%', height: 100, borderRadius: 10, marginBottom: 10 }} />
				<Text numberOfLines={2} style={styles.description}>Pep Guardiola has face Real Madrid 17 times as a nmanager Pep Guardiola has hailed Real Madrid as the "kings" of the Champions League ahead of Manchester City's clash with the 13-time European champion</Text>
				<View style={styles.footer}>
					<TouchableWithoutFeedback>
						<View>
							<Text style={styles.followBtnText}>Read More</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<View style={styles.followBtnWrapper}>
							<Text style={styles.followBtnText}>Follow</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</TouchableOpacity>
	)
}