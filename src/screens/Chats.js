import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Header, ChatItem } from '../components';

export default function Chats(props) {

	return (
			<Container>
				<Header title="Chats" />
				<ChatItem onPress={() => { props.navigation.navigate("Chat") }} />
			</Container>
	)
}