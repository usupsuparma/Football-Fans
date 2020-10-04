import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';

import { colors } from '../config';

export default FeedModal = React.forwardRef((props, ref) => {

	const WINDOW_HEIGHT = Dimensions.get('window').height;
	const WINDOW_WIDTH = Dimensions.get('window').width;

	const styles = {
		modalWrapper: {
			width: WINDOW_WIDTH,
			// height: WINDOW_HEIGHT,
			padding: 20,
			marginBottom: 20,
		},
		header: {
			flexDirection: 'row',
			marginBottom: 10,
		},
		titleWrapper: {
			flex: 2,
			marginHorizontal: 10,
		},
		title: {
			fontSize: 18,
			lineHeight: 25
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
			borderRadius: 10,
		},
		followBtnText: {
			color: colors.primary
		},
		content: {
			lineHeight: 30,
			marginTop: 20,
			fontSize: 16
		},
		closeBtnContainer: {
			backgroundColor: '#FF000030', 
			borderRadius: 10, 
			padding: 10, 
			flexDirection: 'row', 
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 10,
		},
		image: {
			width: 50, 
			height: 50, 
			borderRadius: 25 
		}
	}

	const modalRef = useRef(null);

	return (
		<Modalize 
			adjustContentHeight={false} 
			style={{ backgroundColor: 'blue'}} 
			ref={ref}
		>
			<View style={styles.modalWrapper}>
				<View style={styles.header}>
					<Image source={require('../images/ffb.png')} style={styles.image} />
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>Eden Hazard: RealMadrid forward misses man city champions league clash</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
							<Text style={styles.date}>April 16th 2020</Text>
							<TouchableWithoutFeedback>
								<View style={styles.followBtnWrapper}>
									<Text style={styles.followBtnText}>Follow</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</View>
				<Image source={{ uri: 'https://via.placeholder.com/300x300'}} style={{ width: '100%', height: 70, marginTop: 10 }} />
				<Text style={styles.content}>Looking fo udsf oh sdjhf jkh kjsh fkjh kjh dfs; ;lkj lktjr elkj lkrj lkj lkerj lkj lkj erllkj lkj rellj klkj reljkl lkjre lkj lkj relljk jlk jlrwk j lkkresdkgh kjerwwrhgpuioj oerlkrg kjln kreeghjkhgui preh 9ih lkdfnmbkj breh reeuoyh hfeiu hnmreb ig bjremhy uriefhjoii; wiyh ijwlu iwuhlkj bnteuyhuip pewij hbhitluhhiluweru lbbt jibjrwbjnn mbtjkkhupyhrewrbnm,  f  jrerhej klnwerejlhii 5ho jknfjy ukt nm,n jkwehuiy ir  bbsjksg iulrenj nsjb v5 gr UI resources to boost your design workflow? We provide you with Craftwork Unlimited Access just for $99 per year. Get access to all resources created by Craftwork Team by now and during whole year!</Text>
				<TouchableOpacity activeOpacity={0.8} onPress={() => { 	ref.current?.close(); }}>
					<View style={styles.closeBtnContainer}>
						<Text style={{ color: '#FF0000' }}>Close</Text>
						<Icon name="close" type="material" color="#FF0000" size={20} />
					</View>
				</TouchableOpacity>
			</View>
		</Modalize>
	)
})