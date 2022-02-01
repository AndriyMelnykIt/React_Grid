import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/CreateTheme';

import App from './App';

const theme = createTheme ({
	palette: {
		primary: {
			main: '#61dafb'
		},
		secondary: '#da61bf'
	}
})

ReactDOM.render (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById ('root')
);
