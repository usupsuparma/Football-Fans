import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Header } from '../components';

export default function Chat() {
	
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([...messages,
			{
				_id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
			},
			{
				_id: 3,
          text: 'Hello ',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
			}
		])
	}, [])

	useEffect(() => {
		console.log(messages);
	}, [messages])

	function onSend(new_messages = []) {
  	setMessages(GiftedChat.append(messages, new_messages))
  }

	function onPressAvatar(user) {
		console.log(user);
	}

	return (
		<Container>
			<Header title="Chat name" />
			 <GiftedChat
			 	isTyping={true}
        messages={messages}
        onSend={(messages) => { 
					console.log(messages);
					onSend(messages)}}
        user={{
          _id: 1,
					name: 'Joseph Olabisi',
					avatar: 'https://placeimg.com/140/140/any'
        }}
				showUserAvatar
				onPressAvatar={onPressAvatar}
      />
		</Container>
	)
}