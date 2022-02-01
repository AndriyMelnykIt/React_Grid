import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Snack = ({isOpen, handleClose = Function.prototype}) => {
	return (
		<Snackbar
			open={isOpen}
			onClose={handleClose}
			autoHideDuration={3000}
		>
			<Alert severity='success'>Товар добавлений у корзину!</Alert>
		</Snackbar>
	);
};

export default Snack;