import React, { useState } from 'react';
import { SearchBar, Icon } from 'react-native-elements';

export default function HeaderSearchBar() {

	const [search, setSearch] = useState("");

	return (
		<SearchBar 
			platform="android"
			searchIcon={() => {
				return <Icon name="search" type="material" color='gray' />
			}}
			cancelIcon={() => {
				return null
			}}
			containerStyle={{ 
				backgroundColor: '#ffffff90',
				borderRadius: 4
			}}
			inputContainerStyle={{
				height: 18
			}}
			leftIconContainerStyle={{ 
				flex: 0,
			}}
			inputStyle={{ fontSize: 14, marginLeft: 0 }}
			placeholder="Search..."
			onChangeText={setSearch}
			value={search}
		/>
	)
}