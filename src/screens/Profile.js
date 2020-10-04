import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Container, Header } from '../components';
import { Icon } from 'react-native-elements';

import { colors } from '../config';

export default function Profile() {

	const Divider = () => <View style={{ alignSelf: 'center', height: 1, width: '95%', backgroundColor: '#ffffff10', marginVertical: 10 }} />

	const styles = {
		wrapper: {
			padding: 20, 
		
		},
		imageWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			width: '100%',
			marginBottom: 30
		},
		image: {
			height: 100,
			width: 100,
			borderRadius: 50,
			marginRight: 20
		},
		fullname: {
			fontSize: 22,
			color: 'white',
			marginBottom: 10
		},
		username: {
			fontSize: 15,
			color: colors.orange
		},
		itemWrapper: {
			flexDirection: 'row',
			height: 30,
			marginVertical: 10
		},
		itemText: {
			color: 'white',
			marginLeft: 20
		}
	}

	return (
			<Container>
				<Header title="Profile" />
				<ScrollView style={styles.wrapper}>
					<View style={styles.imageWrapper}>
						<Image source={require('../images/ffb.png')} style={styles.image} />
						<View>
							<Text style={styles.fullname}>Olawale Olabisi</Text>
							<Text style={styles.username}>dabigjoe</Text>
						</View>
					</View>
					<View>
						<View style={styles.itemWrapper}>
							<Icon name="phone" type="material" size={20} color={colors.orange} />
							<Text style={styles.itemText}>+2348107714351</Text>
						</View>
						<View style={styles.itemWrapper}>
							<Icon name="email" type="material" size={20} color={colors.orange} />
							<Text style={styles.itemText}>dabigjoe6@gmail.com</Text>
						</View>
					</View>

					<Divider />

					<View style={styles.itemWrapper}>
						<Icon name="calendar-multiple-check" type="material-community" size={20} color={colors.orange} />
						<Text style={styles.itemText}>Followed Topics</Text>
					</View>

					{/* List of followed topics here, most likely tags */}

					<Divider />

					<View style={styles.itemWrapper}>
						<Icon name="user-unfollow" type="simple-line-icon" size={20} color={colors.orange} />
						<Text style={styles.itemText}>Blocked users</Text>
					</View>

					{/* List of blocked user components */}

					<Divider />

					<View style={[styles.itemWrapper, { alignSelf: 'flex-end'}]}>
						<Icon name="exit-to-app" type="material" size={20} color="#f3201399" />
						<Text style={styles.itemText}>Logout</Text>
					</View>
				</ScrollView>
		</Container>
	)
}