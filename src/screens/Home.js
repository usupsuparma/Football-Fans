import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, FlatList, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Header, Container, Title, HeaderSearchBar, HomeFeedItem, FeedModal } from '../components'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Modalize } from 'react-native-modalize';

import { colors } from '../config';

export default function Home() {

	const modalize = React.createRef();

	const [index, setIndex] = useState(0);
	const [routes] = useState([
	 	{ key: 'for_you', title: 'For You' },
		{ key: 'entertainment', title: 'Entertainment' },
		{ key: 'football', title: 'Football' }
	]);

	const renderScene = SceneMap({
		for_you: ForYouRoute,
		entertainment: EntertainmentRoute,
		football: FootballRoute
	});

	const renderTabBar = props => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: 'white' }}
			style={{ backgroundColor: colors.primary }}
			renderLabel={({ route, focused, color }) => {
				let icon;
				if(route.key === 'for_you') {
					icon = <Icon name={focused ? 'person' : 'person-outline'} size={15} type="material" color={color} />
				} else if(route.key === 'entertainment') {
					icon = <Icon name={focused ? 'play-circle-filled' : 'play-circle-outline'} size={15} type="material" color={color} />
				} else if(route.key === 'football') {
					icon = <Icon name='md-football' size={15} type="ionicon" color={color} />
				}

				return (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						{icon}
						<Text style={{ color, marginLeft: 5  }}>
							{route.title}
						</Text>
					</View>
				)
			}}
		/>
	);

	function ForYouRoute() {
		return (
			<View style={{ flex: 1, backgroundColor: colors.primary }}>
				<FlatList
					data={[0, 1, 2, 3, 4, 5, 6]}
					renderItem={item => <HomeFeedItem onPress={() => { 
						// console.log(modalize.current);
						modalize.current?.open() 
						}}/>}
				/>
			</View>	
		)
	}

	function EntertainmentRoute() {
		return <View style={{ flex: 1, backgroundColor: colors.primary }} />
	}
	
	function FootballRoute() {
		return <View style={{ flex: 1, backgroundColor: colors.primary }} />
	}

	const initialLayout = 	{ width: Dimensions.get('window').width };

	return (
		<>
			<Container>
				<Header>
					<HeaderSearchBar />
				</Header>
				<TabView
					renderTabBar={renderTabBar}
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={initialLayout}
				/>
		
			</Container>
			<FeedModal ref={modalize} />
		</>
	)
}