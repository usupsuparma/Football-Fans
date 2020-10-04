import React, { createContext, useState, useEffect } from 'react';


export const authContext = createContext(null);

const { Provider } = authContext;

export default function AuthProvider(props) {

	const [token, setToken] = useState('');
	const [user, setUser] = useState(null); 

	useEffect(() => {
		//get token from local storage if one exists

	}, [])

	return (
		<Provider value={{ token, setToken }}>
			{props.children}
		</Provider>
	)
}